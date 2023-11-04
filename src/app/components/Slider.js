import Link from "next/link"

const Slider = () => {
  return (
    <ul className='md:text-[28px] flex mt-9 gap-[20px] justify-center text-gray-400 overflow-auto md:w-auto'>
        <li className='w-[200px] '><Link href="#" className='w-[200px]'>Treekle</Link></li>
        <li className='w-[200px] '><Link href="#" className='w-[200px]'>Panda</Link></li>
        <li className='w-[200px]'><Link href="#">Skipper </Link></li>
        <li className='w-[200px]'><Link href="#">BCWA</Link></li>
        <li className='w-[200px]'><Link href="#">Bremen </Link></li>
        <li className='w-[200px]'><Link href="#">SolveX</Link></li>
        <li className='w-[200px]'><Link href="#">Brainwave</Link></li>
      </ul>
  )
}

export default Slider