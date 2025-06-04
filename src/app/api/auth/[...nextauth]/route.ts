import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        const decoded: any = JSON.parse(
          Buffer.from(account.id_token.split('.')[1], 'base64').toString()
        );
        const namespace = "https://nexxxt.com";
        token.role = decoded[`${namespace}/roles`] as string[] || [];
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role as string[];
      return session;
    },
  },
};

// Burada NextAuth'a config objesini verip handler yaratıyoruz
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
