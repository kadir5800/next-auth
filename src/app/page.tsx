import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginPage from "./login/page";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <LoginPage />;
  }

  // Eğer oturum varsa direkt dashboard'a yönlendir
  redirect("/dashboard");
}
