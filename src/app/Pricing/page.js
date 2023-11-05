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
            <div className='bg-purple-800 '>
                <div className='md:w-[90%] m-auto p-6'>
                    <h1 className='text-white text-[2rem] font-semibold text-center'>Choose Your Perfect Plan</h1>
                    <p className='text-white text-[1.3rem]'>Explore our range of packages designed to meet your web development and software needs. Whether its building a website, crafting a Chrome extension, creating email templates, or maintaining your online presence, we have the right solution for you.</p>
                </div>
            </div>
        </div>
    )
}

export default Page