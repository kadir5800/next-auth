"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className=" bg-red-500 text-xs hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors duration-400 px-2"
    >
      Çıkış Yap
    </button>
  );
}
