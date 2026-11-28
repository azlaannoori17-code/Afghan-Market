import "dotenv/config";
import { prisma } from "../src";

async function main() {
  const role = await prisma.role.upsert({
    where: { code: "SUPER_ADMIN" },
    update: {
      name: "Super Administrator",
      description: "Global system administrator",
    },
    create: {
      code: "SUPER_ADMIN",
      name: "Super Administrator",
      description: "Global system administrator",
    },
  });

  const permission = await prisma.permission.upsert({
    where: { code: "users.approve" },
    update: {
      name: "Approve Users",
      description: "Approve pending user accounts",
    },
    create: {
      code: "users.approve",
      name: "Approve Users",
      description: "Approve pending user accounts",
    },
  });

  const existing = await prisma.rolePermission.findFirst({
    where: {
      roleId: role.id,
      permissionId: permission.id,
    },
  });

  if (!existing) {
    await prisma.rolePermission.create({
      data: {
        roleId: role.id,
        permissionId: permission.id,
      },
    });
  }

  console.log("SUPER_ADMIN role and users.approve permission are ready.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
