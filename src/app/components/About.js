import Image from "next/image"

const About = () => {
  return (
    <div className='bg-black text-white px-[10px] md:px-[90px] pt-[30px]' id="about">
        <h1 className='text-center text-[3rem] font-semibold mt-[3rem] mb-[3rem]'>
          About Me
        </h1>
        <p className='text-[1rem] md:text-[1.5rem] font-thin text-center text-amber-100 mb-[3rem]'>
          I'm a passionate Software Engineer with a focus on crafting remarkable web experiences, creating innovative Chrome extensions, and exploring the exciting world of cybersecurity. I have worked on more than 60 Projects in the period of 1year and few months for the development progress. Over the last 6 months, i have worked for with 10 clients on multiple projects which includes companies and startups.
        </p>
        <div className='flex justify-center items-center align-middle w-[90%] m-auto md:w-[80vw]  md:gap-[10rem]'>
          <div className='flex md:w-[70px] items-center gap-2'><h1 className='text-amber-500 text-[40px]  md:text-[5rem] font-black'>2</h1> <span className='text-[20px] text-amber-700'>Years of Experience</span></div>
          <div className='flex md:w-[70px] items-center gap-2'><h1 className='text-amber-500 text-[40px] md:text-[5rem] font-black'>10+</h1> <span className='text-[20px] text-amber-700'>Clients Served</span></div>
        </div>
        <div className='mt-[3rem]'>
          <h1 className='text-center text-[2rem] font-bold mb-8'>Service I offer</h1>
          <ul className='text-black flex flex-col justify-center align-middle items-center gap-4 md:flex-row md:gap-[40px] pb-[60px]'>
            <li className='  bg-orange-300 flex flex-col justify-center text-center items-center align-middle gap-5 p-[20px] max-w-[400px]'>
              <Image src='/assets/web.png' alt='Dearboen Adeyeni' width={90} height={10} />
              <h1 className='font-semibold text-[28px]'>Web Development</h1>
              <p className='text-xl'> I am a professional Software Developer who develops fullstack websites with ReactJs, NextJs and Javascript, I also Develop Chrome Extensions with Html and Css and I develop Customized Email Templates with HTML and CSS</p>
            </li>
            <li className='  bg-green-400 flex flex-col justify-center text-center items-center align-middle gap-5 p-[20px] max-w-[400px] '>
              <Image src='/assets/wordpress.png' alt='Dearboen Adeyeni' width={90} height={10} />
              <h1 className='font-semibold text-[28px] '>Wordpress Development</h1>
              <p> I am a professional Wordpress Developer, I Design Wordpress Websites or Wordpress E-Commerce Websites with WooCommerce from Scratch, with Templates or with PHP. I use Templates like Astra or Divi and i am proficient wit Wordpress Plugins Like Elementor</p>
            </li>
            <li className='  bg-purple-600 flex flex-col justify-center text-center items-center align-middle gap-5 p-[20px] max-w-[400px]'>
              <Image src='/assets/web-main.png' alt='Dearboen Adeyeni' width={90} height={10} />
              <h1 className='font-semibold text-[18px]'>Web Maintanence</h1>
              <p> I am a professional Software Developer who develops fullstack websites with ReactJs, NextJs and Javascript, I also Develop Chrome Extensions with Html and Css and I develop Customized Email Templates with HTML and CSS</p>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default About