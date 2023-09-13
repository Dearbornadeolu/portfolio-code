import Link from "next/link"
import Image from "next/image"

const Recent = () => {
  return (
    <div className='pt-[4rem] px-[90px] ' id="recents">
        <h1 className='text-center text-[18px] md:text-[30px] font-bold'>Recent Projects</h1>
        <ul className=' flex flex-col md:flex-row justify-center align-middle items-center gap-5 mt-[50px]'>
          <li className='flex flex-col text-black w-[300px]  '>
            <Link href="/" className='hover:bg-white hover:shadow-2xl'>
              <Image src='/assets/Corporate-land.jpg' alt='Dearboen Adeyeni' width={300} height={300} />
              <h1 className='font-bold  mt-4  p-[10px]'>Corporate Website Development</h1>
              <p className='p-[10px] text-gray-500'>You Can have a website Fully Customized  for your brand</p>
            </Link>
          </li>
          <li className='flex flex-col text-black w-[300px]'>
            <Link href="/" className='hover:bg-white hover:shadow-2xl'>
              <Image src='/assets/bremen-ui.jpg' alt='Dearboen Adeyeni' width={300} height={300} />
              <h1 className='font-bold  mt-4  p-[10px]'>Bremen Consolidate Website</h1>
              <p className='p-[10px] text-gray-500'>Blogsite Redesign and Maintanence with Adsense integrated</p>
            </Link>
          </li>

          <li className='flex flex-col text-black w-[300px]'>
            <Link href="/" className='hover:bg-white hover:shadow-2xl'>
              <Image src='/assets/admin.jpg' alt='Dearboen Adeyeni' width={300} height={300} />
              <h1 className='font-bold  mt-4  p-[10px]'>Admin Panel</h1>
              <p className='p-[10px] text-gray-500'>I use React and Tailwind to develop  an Admion Panel for a company. its fully functional with many features</p>
            </Link>
          </li>
          <li className='flex flex-col text-black w-[300px]'>
            <Link href="/" className='hover:bg-white hover:shadow-2xl'>
              <Image src='/assets/Skipper.jpg' alt='Dearboen Adeyeni' width={300} height={300} />
              <h1 className='font-bold  mt-4  p-[10px]'>Skipper Pay</h1>
              <p className='p-[10px] text-gray-500'>A Frontend Web Devloper at Skipper. I Developed the ui with the QR code Converter to help people generate QR codes for their Bank Details</p>
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default Recent