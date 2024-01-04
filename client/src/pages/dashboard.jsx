import React from 'react';
import logo from '../assets/icon-jalan.png';
import './spin.css'
import Layout from '../Layout/tampilan';

const Dashboard = () => {
  return (
 
     <Layout>
    <div>
    <div className= 'h-screen bg-cats bg-no-repeat bg-cover'>


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
    </Layout>
    
  );
}

export default Dashboard