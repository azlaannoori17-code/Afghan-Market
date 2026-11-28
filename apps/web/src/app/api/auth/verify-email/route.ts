import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { prisma } from "@qaventrix/database";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Verification token is required." },
        { status: 400 }
      );
    }

    const tokenHash = createHash("sha256")
      .update(token)
      .digest("hex");

    const result = await prisma.$transaction(async (tx) => {
      const verificationToken =
        await tx.emailVerificationToken.findUnique({
          where: { tokenHash },
          include: {
            authIdentity: {
              include: { user: true },
            },
          },
        });

      if (
        !verificationToken ||
        verificationToken.usedAt ||
        verificationToken.expiresAt <= new Date()
      ) {
        return null;
      }

      await tx.emailVerificationToken.update({
        where: { id: verificationToken.id },
        data: { usedAt: new Date() },
      });

      await tx.userAuthIdentity.update({
        where: { id: verificationToken.authIdentityId },
        data: { isVerified: true },
      });

      const user = verificationToken.authIdentity.user;
      const accountActivated =
        user.approvalStatus === "APPROVED" &&
        user.status === "PENDING_VERIFICATION";

      if (accountActivated) {
        await tx.user.update({
          where: { id: user.id },
          data: { status: "ACTIVE" },
        });
      }

      return { accountActivated };
    });

    if (!result) {
      return NextResponse.json(
        { error: "Invalid or expired verification token." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      emailVerified: true,
      accountActivated: result.accountActivated,
      message: result.accountActivated
        ? "Email verified and account activated."
        : "Email verified. Waiting for management approval.",
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
