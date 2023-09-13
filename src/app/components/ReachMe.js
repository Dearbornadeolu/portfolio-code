

const ReachMe = () => {
  return (
    <div className='p-10'>
        <h1 className='font-bold text-[2rem] mt-[100px] md:mt-[200px] text-center'>Let`&apos;`s make something amazing</h1>
        <h1 className='text-center mt-4'>Write to me</h1>
        <div className='mt-8 border-[2px] border-black md:w-3/4 m-auto flex justify-between p-3 mb-5'>
          <input type='text' className='w-2/3 focus:border-none outline-none'/>
          <button className='bg-black text-white p-[5px] md:py-[10px] md:px-[50px] text-[15px] md:text-[2rem]'>Get a quote</button>
        </div>
      </div>
  )
}

export default ReachMe