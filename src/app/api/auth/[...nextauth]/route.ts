import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
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
        const namespace = "https://nexxxt.com"; // action'da kullandığın namespace
        token.role = decoded[`${namespace}/roles`] as string[] || [];
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role as string[];
      return session;
    },
  },
});

console.log(process.env.AUTH0_CLIENT_ID);

export { handler as GET, handler as POST };
