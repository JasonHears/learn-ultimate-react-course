"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  // can loop through list of providers instead of listing a single one
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
