"use client"; // Add this line at the very top
 
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Digital Marketing.</div>
        <div className='hidden md:flex space-x-10 lg:space-x-16'>
          <a href="/Hero" className='hover:text-blue-400 transition'>Home</a>
          <a href="/About" className='hover:text-blue-400 transition'>About</a>
          <a href="/Services" className='hover:text-blue-400 transition'>Services</a>
          <a href="/Contact" className='hover:text-blue-400 transition'>Contact</a>
        </div>
        <div className='md:hidden'>
          {isOpen ? (
            <AiOutlineClose size={30} onClick={toggleMenu} className='cursor-pointer' />
          ) : (
            <AiOutlineMenu size={30} onClick={toggleMenu} className='cursor-pointer' />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;