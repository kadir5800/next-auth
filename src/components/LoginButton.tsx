"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("auth0")}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
    >
      Giriş Yap
    </button>
  );
}
