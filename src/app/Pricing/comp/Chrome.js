"use client"
import React from 'react'
import { useState } from 'react';

const Chrome = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Option 1');
    const [userInput, setUserInput] = useState('');
    const [coupon, setCoupon] = useState('');

    const openPopup = () => {
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    const submitRequest = () => {
        // You can handle the submission logic here.
        alert(`Selected option: ${selectedOption}\nUser input: ${userInput}`);
        closePopup();
    }

    const payNow = () => {
        // You can handle the payment logic here.
        alert('Redirecting to the payment gateway...');
        closePopup();
    }

    return (
        <div className='mt-[40px]'>
            <h1 className='text-center text-[1.8rem] font-semibold mt-3 mb-11'>CHROME EXTENSION  DEVELOPMENT</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center mt-5 m-auto align-middle">
                <div className='w-full border-2  border-purple-500 p-3'>
                    <div className='flex text-purple-800'>
                        <h1>$</h1>
                        <h1 className='text-[3rem]'>170</h1>
                    </div>
                    <p>Get your chrome Extension with Basic Features for personal use. </p>
                    <div className='mt-3 flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[15px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Basic Api Integration</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Creation of a simple Chrome extension with basic functionality.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Suitable for those looking for a straightforward solution to enhance their browsing experience.</h1>
                        </div>
                    </div>
                    <div className=' mt-2 w-fit m-auto'>
                        <button className='text-purple-800 py-1 px-5 bg-white ' onClick={openPopup}>GET NOW</button>
                    </div>
                </div>
                <div className='w-full border-2  border-purple-500 p-3'>
                    <div className='flex text-purple-800'>
                        <h1>$</h1>
                        <h1 className='text-[3rem]'>500</h1>
                    </div>
                    <p>Ideal for businesses seeking to integrate additional functionality into their web applications or browser.</p>
                    <div className='mt-3 flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[15px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Multiple functionalities or features.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Enhanced user interface with customization options.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Basic user documentation.</h1>
                        </div>
                    </div>
                    <div className=' mt-2 w-fit m-auto'>
                        <button className='text-purple-800 py-1 px-5 bg-white ' onClick={openPopup} >GET NOW</button>
                    </div>
                </div>
                <div className='w-full border-2  border-purple-500 p-3'>
                    <div className='flex text-purple-800'>
                        <h1>$</h1>
                        <h1 className='text-[3rem]'>1400+</h1>
                    </div>
                    <p>Best for businesses or enterprises requiring a top-tier extension with advanced functionalities.</p>
                    <div className='mt-3 flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[15px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Advanced and customizable features.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Sophisticated user interface with branding options.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>In-depth user documentation.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white w-[10px] h-[10px]'></div>
                            <h1 className='text-[.8rem]'>Priority support.</h1>
                        </div>
                    </div>
                    <div className=' mt-2 w-fit m-auto'>
                        <button className='text-purple-800 py-1 px-5 bg-white ' onClick={openPopup} >GET NOW</button>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
                    <div className="bg-black bg-opacity-50 fixed inset-0"></div>
                    <div id="popup" className="relative z-10 p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-3">Pay now or Ask for Clarification</h2>
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                            X
                        </button>
                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="w-full p-2 mb-2 border rounded-md"
                        >
                            <option value="Option 1">$150</option>
                            <option value="Option 2">$100</option>
                            <option value="Option 3">$2500</option>
                            <option value="Option 4">Custom</option>
                        </select>
                        {selectedOption === 'Option 4' && (
                            <input
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                placeholder="Enter coupon code"
                                className="w-full p-2 mb-2 border rounded-md"
                            />
                        )}
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Enter your request"
                            className="w-full p-2 mb-2 border rounded-md"
                        />
                        <button
                            className="bg-purple-800 text-white py-2 px-4 rounded-md mr-2"
                            onClick={submitRequest}
                            disabled={selectedOption === 'Option 4'}
                        >
                            Submit
                        </button>
                        <button
                            className="bg-green-600 text-white py-2 px-4 rounded-md"
                            onClick={payNow}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chrome