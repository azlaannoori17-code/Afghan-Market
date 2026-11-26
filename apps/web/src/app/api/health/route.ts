import { prisma } from "@qaventrix/database";

export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await prisma.$queryRaw`SELECT 1 AS ok`;

    return Response.json({
      status: "ok",
      database: "connected",
      result,
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    return Response.json(
      { status: "error", database: "disconnected" },
      { status: 500 }
    );
  }
}
