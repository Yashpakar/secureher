import React, { useState } from 'react';
import logo1 from '../../assets/header/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navClass = isOpen ? 'left-0' : '-left-[300px]';
  const iconClass = isOpen ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line';

  return (
    <div className="nav">
  {/* //  mobile nav */}
    <nav className={`mnav bg-pink-200 fixed w-[300px] top-0 h-screen ${navClass} shadow-2xl lg:hidden transition-all duration-300 z-100`}>
      <div 
        className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all' 
        onClick={toggleNav}
      >
        <i className={`mnav__close-btn-icon ${iconClass} text-2xl text-white`}></i>
      </div>
     
 {/* logos and list form */}
      <div className='px-12 flex flex-col gap-y-12 h-full'>
      <div className="flex items-center  justify-center gap-2 ">
          <a href="#">
            <img src={logo1} />
          </a>
          <div className='flex flex-col'>
            <strong className=' text-2xl '>Secure <span className='text-accent-default'> her</span></strong>
            <span className='text-xs ml-0.5'>you can always feel safe</span>
          </div>
        </div>
        <ul className='flex flex-col gap-y-5'>
          <li>
            <a href="#" className='text-secondary hover:text-accent-default transition-all'>Home</a>
          </li>
          <li>
            <a href="#" className='text-secondary hover:text-accent-default transition-all'>Emergency Support</a>
          </li>
          <li>
            <a href="#" className='text-secondary hover:text-accent-default transition-all'>Events</a>
          </li>
          <li>
            <a href="#" className='text-secondary hover:text-accent-default transition-all'>Forum</a>
          </li>
          <li>
            <a href="#" className='text-secondary hover:text-accent-default transition-all'>SOS</a>
          </li>
        </ul>

        <form className='relative flex gap-x[10px]'>
          <label htmlFor="mnav-search-input" for="mnav-search-input">
            <i className="ri-search-line text-2xl text-accent-default"></i>
          </label>
          <input type="text" id='mnav-search-input' placeholder='Search...' className='outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent-default placeholder:italic rounded-xl' />
        </form>
      </div>
    </nav>
  {/* desktop nav */}
    <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]'>
    <ul className='flex  gap-x-4'>
          <li>
            <a href="#" className='border-r pr-4 text-secondary hover:text-accent-default transition-all'>Home</a>
          </li>
          <li>
            <a href="#" className='border-r pr-4 text-secondary hover:text-accent-default transition-all'>Emergency Support</a>
          </li>
          <li>
            <a href="#" className='border-r pr-4 text-secondary hover:text-accent-default transition-all'>Events</a>
          </li>
          <li>
            <a href="#" className='border-r pr-4 text-secondary hover:text-accent-default transition-all'>Forum</a>
          </li>
          <li>
            <a href="#" className=' text-secondary hover:text-accent-default transition-all'>SOS</a>
          </li>
        </ul>

        <form action="" className='relative flex gap-x-[20px]' >
          <label htmlFor="search-input" className='flex justify-center items-center group'>
            <i className="ri-search-line text-2xl text-accent-default"></i>
          </label>
          <input type="text" placeholder='Search...' id='search-input ' className='outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent-default placeholder:italic placeholder:text-base transition-all duration-150 ' />
        </form>
    </nav>
    </div>
  )
}

export default Navbar;

