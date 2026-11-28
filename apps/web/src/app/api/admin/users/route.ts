import { NextResponse } from "next/server";
import { prisma } from "@qaventrix/database";
import { getCurrentSession } from "@/lib/auth/session";
import { hasGlobalPermission } from "@/lib/auth/permissions";

export async function GET() {
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

    const users = await prisma.user.findMany({
      where: { status: "PENDING_VERIFICATION" },
      select: {
        id: true,
        status: true,
        createdAt: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,
            displayName: true,
          },
        },
        authIdentities: {
          select: {
            identifier: true,
            identityType: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
