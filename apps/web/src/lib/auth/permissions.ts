import { prisma } from "@qaventrix/database";

export async function hasGlobalPermission(
  userId: string,
  permissionCode: string
) {
  const assignments = await prisma.userRoleAssignment.findMany({
    where: {
      userId,
      scopeType: "GLOBAL",
      isActive: true,
      OR: [
        { expiresAt: null },
        { expiresAt: { gt: new Date() } },
      ],
    },
    select: {
      roleId: true,
    },
  });

  if (assignments.length === 0) return false;

  const rolePermissions = await prisma.rolePermission.findMany({
    where: {
      roleId: { in: assignments.map((item) => item.roleId) },
    },
    include: {
      permission: {
        select: { code: true },
      },
    },
  });

  return rolePermissions.some(
    (item) => item.permission.code === permissionCode
  );
}
