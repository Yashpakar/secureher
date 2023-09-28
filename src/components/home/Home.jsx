import React from 'react'
import logo from '../../assets/header/logo.png'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <header className='py-8 lg:pt-6 lg:pb-14 '>
      <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0'>
        <div className="flex items-center  justify-center gap-2">
          <a href="#">
            <img src={logo} />
          </a>
          <div className='flex flex-col'>
            <strong className=' text-4xl '>Secure <span className='text-accent-default'> her</span></strong>
            <span className='text-sm ml-0.5'>you can always fill safe</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
            <i className='ri-map-pin-2-fill text-2xl text-accent-default'></i>
            <div className='text-secondary'>safe location</div>
          </div>
          <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
            <i className='ri-phone-fill text-accent-default '></i>
            <div className='text-secondary'>Emergence Phone</div>
          </div>
          <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>SOS</button>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Home
