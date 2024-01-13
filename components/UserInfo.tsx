"use client"

import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <h2>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </h2>
        <h2>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </h2>
        <button
          onClick={() => signOut()}
          className="bg text-white-red-500 text-white font-bold p-6 py-2 mt-3"
        >
          Log Out 
        </button>
      </div>
    </div>
  );
}
