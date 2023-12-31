import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import logo from '../assets/Logo_main.png';
import { Routes,Route, Link, Outlet  } from 'react-router-dom';



const Navbar = () => {
// const NavbarMenu = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
// }

// <h1 className='w-full text-3xl font-bold text-[#05386b]'> Martin Pasaribu </h1>
  return (
    <div  className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            
            <img className='max-w-[140px] md:max-w-[250px] md:mx-2 md:mt-12  mx-10 mt-1 invisible sm:visible' src={logo} alt='/' />
           
            <ul className='hidden md:flex'>
              <li className='p-4'> Resource</li>
              <li className='p-4'> <Link to='/Api'> API </Link> </li>
              <li className='p-4'> <Link to='/'> Home </Link> </li>
              <li className='p-4'> About</li>
              <li className='p-4'> Contac</li>
            </ul>

        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}            
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-{60%} h-full border-r border-r-gray-900 bg-slate-500 ease-in-out duration-500' : 'fixed left-[-100%] '}>
          <h1 className='w-full text-3xl font-bold text-[#05386b] m-4'> Martin Pasaribu </h1>

          <ul className=' uppercase m-4'>
            <li className='p-4 border-b border-gray-600' > <Link to='/'> Home </Link></li>
            <li className='p-4 border-b border-gray-600' > <Link to='/Api'> API </Link></li>
            <li className='p-4 border-b border-gray-600' > Home </li>
            <li className='p-4 border-b border-gray-600' > About</li>
            <li className='p-4'> Contac</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar