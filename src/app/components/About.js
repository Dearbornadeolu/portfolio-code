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
      <div className='mt-[3rem] w-[90%] m-auto'>
        <h1 className='text-center text-[2rem] font-bold mb-8'>Service I offer</h1>


        <ul className='service-cards-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer pb-[40px]'>
          <li className='service-card bg-white shadow-2xl text-black rounded-2xl'>
            <Image src='/assets/web.png' alt='Web Development' width={90} height={10} className="m-auto"/>
            <h1 className=' text-center md:text-[1.3rem] font-bold'>Full-Stack Web Development</h1>
            <p className='md:text-[1rem] pt-3'>
              We specialize in full-stack web development using cutting-edge technologies like ReactJS, NextJS, and JavaScript. Our team creates highly responsive and feature-rich websites tailored to your specific needs.
            </p>
          </li>
          <li className='  bg-white shadow-2xl text-black rounded-2xl'>
            <Image src='/assets/extension.png' alt='Chrome Extension Development' width={90} height={10} className="m-auto"/>
            <h1 className=' text-center md:text-[1.3rem] font-bold'> Chrome Extension Development</h1>
            <p className='md:text-[1rem] pt-3'>
              We excel in building custom Chrome extensions to enhance your browsers functionality. Whether it is for productivity, e-commerce, or any other purpose, we have got you covered.
            </p>
            
          </li>
          <li className=' bg-white shadow-2xl text-black rounded-2xl'>
            <Image src='/assets/email.png' alt='Customized Email Templates' width={90} height={10}  className="m-auto"/>
            <h1 className='text-center md:text-[1.3rem] font-bold'>Customized Email Templates</h1>
            <p className='md:text-[1rem] pt-3'>
              Our team crafts eye-catching and responsive email templates that make your communications stand out. Whether you need newsletters, promotional emails, or transactional templates, we have got the design expertise you need.
            </p>
          </li>
          <li className=' bg-white shadow-2xl text-black rounded-2xl'>
            <Image src='/assets/web-main.png' alt='Web Maintenance as a Service' width={90} height={10}  className="m-auto"/>
            <h1 className='text-center md:text-[1.3rem] font-bold'> Web Maintenance as a Service</h1>
            <p className='md:text-[1rem] pt-3'>
              Leave the hassle of website maintenance to us. We offer comprehensive web maintenance services, including updates, security checks, and ongoing support, to ensure your website remains reliable and up-to-date.
            </p>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default About