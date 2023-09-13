import Image from "next/image"

const Hero = () => {
  return (
    <div className='pt-[4rem] px-[10px] md:px-[90px] md:flex  md:flex-row items-center md:-mt-11 w-[100%]'>
        <div className='font-bold'>
          <h1 className='text-[3rem] md:text-[5rem]'>
            Hi<span className='text-gray-300'>,</span>
          </h1>
          <h1 className='text-[3rem] lg:text-[5rem]'>
            I am <span className='text-purple-800'>Dearborn Adeyeni</span>
          </h1>
          <p className='font-normal text-[1rem] mt-3 md:mt-0  md:text-lg md:w-[94%]'>
            Software Engineer who Specializes in Web Development, Chrome Extension Development and a Cyber Security Enthuatist. I write Html, Css, Javascript, Typescript, ReactJs, NextJs with Firebase. I also Design Websites with Wordpress writing basic Php.
          </p>
          <div className='mt-[3rem] md:mb-4'>
            <a href="mailto:dearbornadeyeni@example.com" className=' bg-purple-800 text-white p-[1rem]'>Get in Touch</a>
            <a href="your_file_link_here" className='ml-[10px] border-2 border-black p-[1rem] font-semibold'>Download CV</a>
          </div>
        </div>
        <div className='background-div w-[20rem] m-auto md:w-[1000px]'>
          <div className='bg-orange-300 w-full rounded-[50%] '>
            <div className='bg-white rounded-[50%] w-[80%] h-[70%] m-auto'>
              <Image
                src='/assets/dbDrip.png'
                alt='Dearborn Adeyeni'
                className='pt-[5rem] w-[10000px]'
                width="8000"
                height="2000"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero