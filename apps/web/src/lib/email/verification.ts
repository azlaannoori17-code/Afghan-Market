import { randomBytes, createHash } from "node:crypto";
import { prisma } from "@qaventrix/database";
import { sendEmail } from "./mailer";

export async function sendVerificationEmail(
  userId: string,
  email: string
) {
  const identity = await prisma.userAuthIdentity.findFirst({
    where: {
      userId,
      identityType: "EMAIL",
    },
    select: { id: true },
  });

  if (!identity) {
    throw new Error("Email identity not found.");
  }

  const token = randomBytes(32).toString("hex");
  const tokenHash = createHash("sha256")
    .update(token)
    .digest("hex");

  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  await prisma.emailVerificationToken.create({
    data: {
      authIdentityId: identity.id,
      tokenHash,
      expiresAt,
    },
  });

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const verificationUrl =
    `${appUrl}/api/auth/verify-email?token=${token}`;

  await sendEmail(
    email,
    "Verify your QAVENTRIX MARKET email",
    `Please verify your email: ${verificationUrl}`,
    `<h2>Welcome to QAVENTRIX MARKET</h2>
     <p>Please verify your email by clicking the link below:</p>
     <a href="${verificationUrl}">Verify Email</a>
     <p>This link expires in 24 hours.</p>`
  );
}
