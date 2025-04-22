import { clerkClient } from "@clerk/nextjs/server";
import { UserRole } from "@/drizzle/schema";

const client = await clerkClient();

export async function syncClerkUserMetadata(user: {
  id: string;
  clerkUserId: string;
  role: UserRole;
}) {
  client.users.updateUserMetadata(user.clerkUserId, {
    publicMetadata: {
      dbId: user.id,
      role: user.role,
    },
  });
}
