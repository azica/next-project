import type { AuthOptions, User } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async jwt({ token, account }) {
      return {...token, account};
    },
    async session({session, token, user}) {
      session.user = token as Response.Tokens;
      return session
    }
  }
};
