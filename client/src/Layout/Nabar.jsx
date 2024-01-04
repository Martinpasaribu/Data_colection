import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Navbar = () => {

    const navigate = useNavigate();
    const [loggingOut, setLoggingOut] = useState(false);


    
    const logout = async()  => {
        try {
            setLoggingOut(true);
            await axios.delete('http://localhost:5000/logout');
            navigate('/');
        } catch (error) {
          console.log(error);
          console.log({msg:'error bro'})
        }
        finally {
          setLoggingOut(false); // Set status loggingOut ke false setelah proses logout selesai
        }
      }


  return (
    <nav class="bg-opacity-50 py-4 mx-12">
    <div class="container mx-auto flex justify-between items-center">
    <a href="#" class="text-white text-lg font-bold ml-16 ">Logo</a>
    <ul class="flex space-x-4 mr-11">
        <li><a href="/login" class="text-white hover:text-gray-300">Beranda</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Tentang</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Layanan</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Kontak</a></li>
        <div className="navbar-end bg-blue ">
        <div className="navbar-item ">
          <div className="buttons  mx-2">
            {loggingOut ? (
              // Periksa status loading untuk menampilkan pesan loading atau data
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red"></div>
              </div>
            ) : (
              <button onClick={logout} className="button is-light">
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </ul>

    </div>

    </nav>
  )
}
export default Navbar
