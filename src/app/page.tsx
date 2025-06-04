import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginPage from "./login/page";
import HomePage from "./home/page";

export default async function Home() {
  const session = await getServerSession(authOptions) as Session | null;

  return (
    <div className="min-h-screen">
      {!session ? (
        <>
          <LoginPage />
        </>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
}
