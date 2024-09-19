import connectDB from "@lib/db";
import { User } from "@models/User";
import { compare } from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email= credentials.email as string || undefined;
        const password= credentials.password as string || undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please fill both email and password fields");
        }

        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");
        if (!user || !user.password) {
          throw new CredentialsSignin("Invalid email or password");
        }


        const isValid = await compare(password, user.password);
        if (!isValid) {
          throw new CredentialsSignin("Password did not match");
        }

        const userData = {
          id: user._id,
          firstName: user.firstname,
          lastName: user.lastname,
          email: user.email,
          role: user.role,
        }

        return userData;

      },
    }),
  ],

  pages: {
    signIn: "/login",
  }
});
