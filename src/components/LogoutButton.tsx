"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors duration-300"
    >
      Çıkış Yap
    </button>
  );
}
