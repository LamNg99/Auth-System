"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // Add some server actions before signout
  await signOut();
};
