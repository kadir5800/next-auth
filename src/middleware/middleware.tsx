// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Giriş yapılmadığında yönlendirilecek sayfa
  },
});

export const config = {
  matcher: [
    "/protected/:path*", // Korumak istediğin route'ları buraya yaz
  ],
};
