import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const config = {
  providers: [GoogleProvider],
  callbacks: {
    authorized({ request, auth }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
