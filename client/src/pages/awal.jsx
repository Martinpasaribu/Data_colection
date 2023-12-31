import React from 'react';
import logo from '../assets/icon-jalan.png';
import './spin.css'

const Awal = () => {
  return (
    <div>
    <div className= 'h-screen bg-cats bg-no-repeat bg-cover'>
        <nav class="bg-opacity-50 py-4 mx-12">
            <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-white text-lg font-bold ml-16 ">Logo</a>
            <ul class="flex space-x-4 mr-11">
                <li><a href="/login" class="text-white hover:text-gray-300">Masuk</a></li>
                <li><a href="#" class="text-white hover:text-gray-300">Tentang</a></li>
                <li><a href="#" class="text-white hover:text-gray-300">Layanan</a></li>
                <li><a href="#" class="text-white hover:text-gray-300">Kontak</a></li>
            </ul>
            </div>
        </nav>

        <div className='bg-opacity-50 py-4 mx-12'>
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex-1 text-center font-bold">
                <h1 className='text-5xl text-gray'> Web Data Colection </h1>
                <h3> Kelolah data anda lebih Baik</h3>
                </div>
                <div class="flex-1">
                <img className='' src={logo} alt='/' />
                </div>
            </div>
    
        </div>
    </div>

    <div className=" bg-slate-200 py-8 ">
    aku
    </div>
    
    </div>

  )
}

export default Awal