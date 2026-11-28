import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@qaventrix/database";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/lib/email/verification";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    const existingIdentity = await prisma.userAuthIdentity.findFirst({
      where: {
        identityType: "EMAIL",
        identifier: email,
      },
    });

    if (existingIdentity) {
      return NextResponse.json(
        { message: "Email is already registered." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        profile: {
          create: {
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`,
          },
        },
        authIdentities: {
          create: {
            identityType: "EMAIL",
            provider: "PASSWORD",
            identifier: email,
            passwordHash,
          },
        },
      },
      select: {
        id: true,
        status: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,
            displayName: true,
          },
        },
      },
    });

    await sendVerificationEmail(user.id, email);

    return NextResponse.json(
      {
        message: "Registration successful. Verification is pending.",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      { message: "Registration failed." },
      { status: 500 }
    );
  }
}
