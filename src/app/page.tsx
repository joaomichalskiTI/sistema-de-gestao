import Image from 'next/image';


export default function Home() {
  return (
    <div className='min-h-screen w-full bg-black flex  items-center flex-col justify-center'>
      <div className=' '>
        <Image
          src="/world.gif"
          width={100}
          height={100}
        />
      </div>
      <section className='flex-initial h-80 w-1/4  mt-10'>
        <div className=' w-full flex justify-center mt-3 font-thin text-2xl'>
          <h1 className=' text-white '>WELCOME</h1>
        </div>
        <div className=' w-full flex flex-col items-center justify-center mt-4'>
          <input className='m-2 w-4/5 p-1' type="text" name="email" id="email" />
          <input className='m-2 w-4/5 p-1' type="password" name="sennha" id="senha" />
        </div>
        <div className=' w-full flex justify-center'>
          <button className=' mt-4 font-thin text-white hover:text-zinc-400 active:text-white'>SING IN</button>
        </div>
        <div className=' mt-4 w-full flex justify-center'>
        <hr className=' w-11/12'/>
        </div>
        <div className=' mt-4 h-1/5 w-full flex justify-center items-center'>
          <button className=' text-white font-thin hover:text-zinc-400 active:text-white'>CREATE ACCOUNT</button>
        </div>
      </section>
    </div>
  )
}
