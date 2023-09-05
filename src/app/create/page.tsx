'use client'
import Image from "next/image";


export default function create() {
  return (
    <div className=" min-h-screen w-full bg-black flex  items-center justify-center bg-contain bg-[url('/espaço.jpg')]">
      <main className="flex flex-col h-80 items-center">
        <Image
          className=" mb-3"
          alt="oi"
          src="/world.gif"
          width={100}
          height={100}
        />
        <form action="" className="flex flex-col gap-y-4 mt-5 ">
          <input className="h-8  " type="text" name="nome" id="nome" />
          <input className="h-8  " type="email" />
          <input className="h-8  " type="password" />
          <div className=" flex justify-center w-full flex-col">
            <hr className="w-full mt-4" />
            <button className="font-thin text-white hover:text-zinc-400 active:text-white mt-3">CREATE ACOUNT</button>
          </div>
        </form>
      </main>
    </div>
  );
}
