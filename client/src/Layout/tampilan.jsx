import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './sidebar'
import Navbar from '../Layout/Nabar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex mt-6 min-h-screen">
        <div className="w-1/6 bg-gray-200">
          <Sidebar />
        </div>
        <div className=" bg-gray-100">
          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
