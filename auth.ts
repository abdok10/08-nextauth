import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import connectDB from "@lib/db";
import { User } from "@models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("No user found with this email");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Incorrect password");
        }

        const userData = {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user = {
          ...session.user,
          id: token.sub,
          role: token.role,
        };
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectDB();

          // Check if the user already exists
          const existingUser = await User.findOne({ email });

          // If the user doesn't exist, create them
          if (!existingUser) {
            await User.create({ email, name, image, authProviderId: id });
          }

          return true; // Return true after processing the user
        } catch (error) {
          console.error("Error while creating user: ", error);
          throw new Error("Error while creating user");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      }

      return false; // Fallback for other providers
    },
  },
});
