import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SidebarMenu from "@/components/SidebarMenu";
import LogoutButton from "@/components/LogoutButton";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarMenu />

      {/* İçerik Alanı */}
      <div className="flex-1 flex flex-col">
        {/* Üst Bar */}
        <header className="flex justify-between items-center bg-white shadow p-4">
          <div className="text-gray-800 font-semibold flex flex-wrap gap-2">
            {user?.role?.map((r: string, i: number) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded"
              >
                {r}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-800 font-semibold">
              {user?.name || "Kullanıcı"}
            </p>
            <LogoutButton />
          </div>
        </header>

        {/* Sayfa İçeriği */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
