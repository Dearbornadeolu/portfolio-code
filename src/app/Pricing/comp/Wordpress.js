"use client"
import React from 'react'
import { useState } from 'react';

const Wordpress = () => {

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
      <h1 className='text-center text-[1.8rem] font-semibold mt-3 mb-[39]'> WORDPRESS WEB DESIGN </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center mt-5 m-auto align-middle">
        <div className='w-full border-2  p-3'>
          <div className='flex'>
            <h1>$</h1>
            <h1 className='text-[3rem]'>130</h1>
          </div>
          <p>This WordPress Design Package is the perfect choice for individuals and small businesses looking to establish their online presence.</p>
          <div className='mt-3 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[15px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>5-7 Pages Setup</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Responsive design for mobile and desktop.</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Basic SEO optimization.</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>1 Month of Support</h1>
            </div>
          </div>
          <div className=' mt-2 w-fit m-auto'>
            <button className='bg-purple-800 py-1 px-5' onClick={openPopup}>GET NOW</button>
          </div>
        </div>
        <div className='w-full border-2  p-3'>
          <div className='flex'>
            <h1>$</h1>
            <h1 className='text-[3rem]'>1000+</h1>
          </div>
          <p>Get a WordPress website for your Medium businesses or E-commerce website using woo-commerce</p>
          <div className='mt-3 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[15px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Custom website development (4 pages or more).</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Responsive design for mobile and desktop.</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Woo-commerce Setup</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Advanced SEO optimization.</h1>
            </div>
          </div>
          <div className=' mt-2 w-fit m-auto'>
            <button className='bg-purple-800 py-1 px-5' onClick={openPopup}>GET NOW</button>
          </div>
        </div>
        <div className='w-full border-2  p-3'>
          <div className='flex'>
            <h1>$</h1>
            <h1 className='text-[3rem]'>2500+</h1>
          </div>
          <p>The Premium WordPress Design Package delivers a comprehensive and tailored solution. We will craft a completely unique design and bring your most ambitious ideas to life. </p>
          <div className='mt-3 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[15px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>E-commerce Integration</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Advanced Functionality</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>SEO optimization.</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-600 w-[10px] h-[10px]'></div>
              <h1 className='text-[.8rem]'>Blog Setup and Content Integration</h1>
            </div>
          </div>
          <div className=' mt-2 w-fit m-auto'>
            <button className='bg-purple-800 py-1 px-5' onClick={openPopup}>GET NOW</button>
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

export default Wordpress