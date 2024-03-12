import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './lib/prisma';

const config = {
  providers: [GoogleProvider],
  callbacks: {
    authorized({ request, auth }) {
      return !!auth?.user;
    },

    async signIn({ user }) {
      if (user && user.email) {
        const { email } = user;

        const userExists = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!userExists) {
          await prisma.user.create({
            data: {
              email,
              image: user.image,
              name: user.name,
            },
          });
        }

        return true;
      }

      return false;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
