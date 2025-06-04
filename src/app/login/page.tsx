import LoginButton from "@/components/LoginButton";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
     <div className="min-h-screen bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-6">
         <main className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg max-w-md w-full p-10 flex flex-col items-center gap-8 font-sans">
           <h1 className="text-4xl font-extrabold text-gray-800">Hoş Geldin!</h1>
           
             <>
               <p className="text-gray-600 text-center">
                 Devam etmek için lütfen giriş yap.
               </p>
              <LoginButton />
             </>
         </main>
       </div>
  );
}