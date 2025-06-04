import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Eğer kullanıcı giriş yapmışsa ve /login sayfasına erişmeye çalışıyorsa yönlendir
  if (token && pathname === "/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Eğer kullanıcı giriş yapmamışsa ve korumalı sayfalara gitmeye çalışıyorsa login'e yönlendir
  if (!token && pathname.startsWith("/dashboard")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // /dashboard/mesajlar sayfası sadece admin'e açık
  if (token && pathname.startsWith("/dashboard/message")) {
    const roles = Array.isArray(token.role) ? token.role : [];
    if (!roles.includes("admin")) {
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard"; // Yetki yoksa ana dashboard'a yönlendir
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*", "/dashboard"],
};
