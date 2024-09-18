"use server";

import connectDB from "@lib/db";
import { User } from "@models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

const register = async (formData: FormData) => {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstname || !lastname || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  // existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  // hash password
  const hashedPassword = await hash(password, 10);
  await User.create({ firstname, lastname, email, password: hashedPassword });
  console.log("User created successfully!");
  redirect("/login");
};

export { register };
