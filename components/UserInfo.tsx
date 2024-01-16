"use client"

import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";
import Link from "next/link";
//import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <>
      <div className="p-4  text-white border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
          {/* <RemoveBtn /> */}
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
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
            className="bg-red-500 text-white font-bold p-40 py-2 mt-3"
          >
            Log Out 
          </button>
        </div>
      </div>
    </>
  );
}
