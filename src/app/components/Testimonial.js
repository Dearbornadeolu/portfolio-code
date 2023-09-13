import Image from "next/image"

const Testimonial = () => {
  return (
    <div className='mt-[100px] '>
    <h1 className='text-black text-[2.5rem] text-center font-bold'>What Client Say</h1>
    <div className=' border-2 border-black w-[90%]  md:w-[50%] mt-[80px] m-auto p-[30px] h-[390px] md:h-[400px]'>
      <Image src='/assets/quote.png' alt='Dearboen Adeyeni' width={50} height={50} />
      <p className='text-[1.5rem] pt-[30px] w-[80%] md:w-[50%]'>
        Dearborn Knows his onions very Well. I recommend him
      </p>

      <div className='flex justify-between'>
        <div className=''>
          <h1 className='font-bold text-[2rem] pt-10'>Fiyin Ebemidayo</h1>
          <p className='text-purple-600'>- CEO Bremen Consolidate</p>
        </div>
        <Image src='/assets/fiyin.jpg' alt='Fiyin Ebemidayo' width={300} height={300} className='shadow-2xl shadow-black hidden md:block w-[200px] h-auto md:w-auto transform translate-x-[20%] md:translate-x-[40%] md:-translate-y-[40px]' />
      </div>
    </div>
  </div>
  )
}

export default Testimonial