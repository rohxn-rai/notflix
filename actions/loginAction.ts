"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { USERS_DB, addUserToDB } from "@/data/users";
import { revalidatePath } from "next/cache";

export type ActionState = {
  error?: string;
  success?: boolean;
};

const loginAction = async (
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  const actionType = formData.get("actionType") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (actionType === "guest") {
    redirect("/");
  }

  if (actionType === "register") {
    if (!username || !password) return { error: "Please fill in all fields" };

    const exists = USERS_DB.find(
      (u) => u.username.toLowerCase() === username.toLowerCase(),
    );

    if (exists) return { error: "User already exists. Please login." };

    addUserToDB({ username, password });

    const cookieStore = await cookies();
    cookieStore.set("notflix_user", username, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  } else if (actionType === "login") {
    if (!username || !password) return { error: "Please fill in all fields" };

    const userRecord = USERS_DB.find(
      (u) => u.username.toLowerCase() === username.toLowerCase(),
    );

    if (!userRecord || userRecord.password !== password) {
      return { error: "Invalid credentials." };
    }

    const cookieStore = await cookies();
    cookieStore.set("notflix_user", userRecord.username, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  revalidatePath("/");
  redirect("/", RedirectType.replace);
};

export default loginAction;
