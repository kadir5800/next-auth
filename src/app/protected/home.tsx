// app/protected/page.tsx
"use client";
import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  return (
    <div className="p-8">
      <h1>Korumalı Sayfa</h1>
      <p>Merhaba {session?.user?.name}, bu sayfaya sadece giriş yapanlar erişebilir.</p>
    </div>
  );
}
