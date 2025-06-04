// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Giriş yapılmadığında yönlendirilecek sayfa
  },
});

export const config = {
  matcher: [
    "/((?!login).*)", // Korumak istediğin route'ları buraya yaz
  ],
};
