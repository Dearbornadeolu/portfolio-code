import Image from "next/image"
import Link from 'next/link';

const About = () => {
  return (
    <div className='bg-black text-white px-[10px] md:px-[90px] pt-[30px]' id="about">
      <h1 className='text-center text-[3rem] font-semibold mt-[3rem] mb-[3rem]'>
        About Me
      </h1>
      <p className='text-[1rem] md:text-[1.5rem] font-thin text-center text-amber-100 mb-[3rem]'>
        I&apos;m a passionate Software Engineer with a focus on crafting remarkable web experiences, creating innovative Chrome extensions, and exploring the exciting world of cybersecurity. I have worked on more than 60 Projects in the period of 1year and few months for the development progress. Over the last 6 months, i have worked for with 10 clients on multiple projects which includes companies and startups.
      </p>
      <div className='flex justify-center items-center align-middle w-[90%] m-auto md:w-[80vw]  md:gap-[10rem]'>
        <div className='flex md:w-[70px] items-center gap-2'><h1 className='text-amber-500 text-[40px]  md:text-[5rem] font-black'>2</h1> <span className='text-[20px] text-amber-700'>Years of Experience</span></div>
        <div className='flex md:w-[70px] items-center gap-2'><h1 className='text-amber-500 text-[40px] md:text-[5rem] font-black'>10+</h1> <span className='text-[20px] text-amber-700'>Clients Served</span></div>
      </div>
      <div className="w-fit m-auto pb-5">
      <Link href="/Pricing" className="bg-purple-800 text-white p-2">My Services</Link>
      </div>
    </div>
  )
}

export default About