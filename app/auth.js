// Import necessary modules
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // Update import

import connectToDB from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import { authConfig } from "./authConfig";

const loginUser = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.error(err); // Use console.error for errors
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await loginUser(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.username = token.username;
        session.img = token.img;
      }
      return session;
    },
  },
});
