import React from 'react'

const WebMain = () => {
    return (
        <div className='mt-[40px]'>
            <h1 className='text-center text-[1.8rem] font-semibold mt-3 mb-[20px]'>MAINTENANCE(WEBSITE & CHROME EXTENSION)</h1>
            <div className="flex justify-center">
                <div className='w-full border-2  border-purple-500 p-3 md:w-[40%]'>
                    <div className='flex text-purple-800'>
                        <h1>$</h1>
                        <h1 className='text-[3rem]'>50+</h1>
                    </div>
                    <p>Web Maintenance Package(Worpress) </p>
                    <div className='mt-3 flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[15px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Content Updates</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Plugin and Theme Updates</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Monthly Backup</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>and lots more...</h1>
                        </div>
                    </div>
                    <div className=' mt-2 w-fit m-auto'>
                        <button className='text-purple-800 py-1 px-5 bg-white '>GET NOW</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default WebMain