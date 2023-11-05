import Image from 'next/image'
import Nav from '../components/Nav'

const Page = () => {
    return (
        <div>
            <Nav />
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <Image src="/assets/illustrarion.jpg" alt='ilustration' height="300" width="350" />
                <div>
                    <h1 className='text-[2.5rem] font-bold '>Affordable <span className='text-purple-800 '>Software Services</span>, Tailored to Your Needs</h1>
                    <p>Are you looking for top-notch <span className='text-purple-800 '>software development services</span> that will not break the bank? We have got you covered!</p>
                </div>
            </div>
            <div className='bg-black text-white'>
                <div className='md:w-[90%] m-auto p-6'>
                    <h1 className='text-white text-[2rem] font-semibold text-center'>Choose Your Perfect Plan</h1>
                    <p className='text-white text-[1.3rem]'>Explore our range of packages designed to meet your web development and software needs. Whether its building a website, crafting a Chrome extension, creating email templates, or maintaining your online presence, we have the right solution for you.</p>
                   <div>
                    <h1 className='text-center text-[1.8rem] font-semibold mt-3'>SOFTWARE DEVELOPMENT</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center mt-5 m-auto align-middle">
                        <div className='w-full border-2  p-3'>
                            <div className='flex'>
                                <h1>$</h1>
                                <h1 className='text-[3rem]'>150</h1>
                            </div>
                            <p>Get a website for your Small businesses or personal use, without paying for unneccesary fees.</p>
                            <div className='mt-3 flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[15px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Custom website design and development (up to 4 pages).</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[10px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Responsive design for mobile and desktop.</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[10px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Basic SEO optimization.</h1>
                                </div>
                            </div>
                           <div className=' mt-2 w-fit m-auto'>
                           <button className='bg-purple-800 py-1 px-5'>GET NOW</button>
                           </div>
                        </div>
                        <div className='w-full border-2  p-3'>
                            <div className='flex'>
                                <h1>$</h1>
                                <h1 className='text-[3rem]'>600</h1>
                            </div>
                            <p>Get a website for your Small businesses or personal use, without paying for unneccesary fees.</p>
                            <div className='mt-3 flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[15px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Custom website design and development (up to 4 pages).</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[10px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Responsive design for mobile and desktop.</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[10px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Basic SEO optimization.</h1>
                                </div>
                            </div>
                           <div className=' mt-2 w-fit m-auto'>
                           <button className='bg-purple-800 py-1 px-5'>GET NOW</button>
                           </div>
                        </div>
                        <div className='w-full border-2  p-3'>
                            <div className='flex'>
                                <h1>$</h1>
                                <h1 className='text-[3rem]'>1500</h1>
                            </div>
                            <p>Get a website for your Small businesses or personal use, without paying for unneccesary fees.</p>
                            <div className='mt-3 flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[15px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Custom website design and development (up to 4 pages).</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[10px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Responsive design for mobile and desktop.</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-purple-600 w-[10px] h-[10px]'></div>
                                    <h1 className='text-[.8rem]'>Basic SEO optimization.</h1>
                                </div>
                            </div>
                           <div className=' mt-2 w-fit m-auto'>
                           <button className='bg-purple-800 py-1 px-5'>GET NOW</button>
                           </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Page