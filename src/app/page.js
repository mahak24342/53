import React from 'react'
import Slider from './Slider'
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="w-screen h-screen relative">
    <div
      className="flex items-center w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url(/main-bg.webp)" }}
    >
      <div className='flex flex-col'>
      <div className=' h-32 top-[-15px] w-screen text-white bg-black '>
        <ul className='flex justify-center gap-10 p-8 pt-16  sm:pt-5 items-center text-2xl'>
          <li>
            Home
          </li>
          <li>Projects</li>
          <li>
Contact
          </li>

        </ul>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="text-[50px] text-white font-semibold">
         Hello There
         
        </h1>
<h2 className='text-5xl font-bold  text-white'>Mahak This Side . I am a </h2>
<span className="text-transparent text-5xl mr-16  font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
           Frontend Developer
          </span>
      
        <p className="text-gray-200 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link
            href="/my-skills"
            className="rounded-[20px] group mt-10 relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
          >
            Learn more
          </Link>
          <Link
            href="/my-projects"
            className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
            My projects
          </Link>
          <Link
            href="/contact-me"
            className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
            Contact me
          </Link>
        </div>
      </div>
    </div>

    <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
      <Link
        href="/my-skills"
        className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
      >
        Learn more
      </Link>

      <Link
        href="/my-projects"
        className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
      >
        My projects
      </Link>
      <Link
        href="/contact-me"
        className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
      >
        Contact me
      </Link>
    </div>

 
    <Image
      src="/stars.png"
      alt="stars"
      height={300}
      width={300}
      className="absolute top-0 left-0 z-[10]"
    />
    </div>
  </main>
  )
}

export default page