import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";

export default async  function Home() {
 const session = await getServerSession(authOptions) as Session | null;
 if (!session) {
    return <p>Giriş yapılmamış.</p>;
  }

  return (
    <div className="p-8">
      <h1>Korumalı Sayfa</h1>
      <p>Merhaba {session?.user?.name}, bu sayfaya sadece giriş yapanlar erişebilir.</p>
       <>
            <p className="text-lg text-gray-800">
              Hoş geldin, <span className="font-semibold">{session.user?.name}</span>!
            </p>
             <LogoutButton  />
          </>
    </div>
  );
}
