import { NextResponse } from "next/server";
import { prisma } from "@qaventrix/database";
import { getCurrentSession } from "@/lib/auth/session";
import { hasGlobalPermission } from "@/lib/auth/permissions";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getCurrentSession();

    if (!session || session.user.status !== "ACTIVE") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const allowed = await hasGlobalPermission(
      session.userId,
      "users.approve"
    );

    if (!allowed) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const { userId } = await params;

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: {
          status: true,
          authIdentities: {
            where: { identityType: "EMAIL" },
            select: { isVerified: true },
          },
        },
      });

      if (!user || user.status !== "PENDING_VERIFICATION") {
        return null;
      }

      const emailVerified = user.authIdentities.some(
        (identity) => identity.isVerified
      );

      await tx.user.update({
        where: { id: userId },
        data: {
          approvalStatus: "APPROVED",
          ...(emailVerified ? { status: "ACTIVE" } : {}),
        },
      });

      return { emailVerified };
    });

    if (!result) {
      return NextResponse.json(
        { error: "User not found or not pending approval" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        approvalStatus: "APPROVED",
        emailVerified: result.emailVerified,
        accountActivated: result.emailVerified,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
