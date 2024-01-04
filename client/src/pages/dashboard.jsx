
import logo from '../assets/icon-jalan.png';
import Layout from '../Layout/tampilan';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { jwtDecode }  from "jwt-decode";
import { useNavigate } from "react-router-dom";
import './spin.css';



const Dashboard = () => {

  const [name, setName ] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('https://datacolection-server.vercel.app/token');
      
      if(!response) console.log('ga ada token')
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
      setLoading(false);
    } catch (error) {
        if(error.response){
          navigate("/");
          console.log('errornya disini hemmmmm')
        }
    }
  }

const axiosJWT = axios.create();


axiosJWT.interceptors.request.use(async(config) => {
  const currentDate = new Date();
  if(expire * 1000 < currentDate.getTime()){
     const response = await axios.get('https://datacolection-server.vercel.app/token');
     
    config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    setToken(response.data.accessToken);
    const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);

  }

  return config;
}, (error) =>{
  return Promise.reject(error);

});


  const getUsers = async() => {
    setLoading(true);
    const response = await axiosJWT.get('https://datacolection-server.vercel.app/users', {
      headers: {
        Authorization: ` Bearer ${token} `
      }       
    });
    setUsers(response.data);
    setLoading(false);
  }


  return (
 
     <Layout>
    <div>
    <div className=' container mt-5'>
        <h1 className="tittle">
            Welcome Back : {name}       
            <table className='table is-striped is-fullwidth'>
            <thead>
            <tr>
              <th> No. </th>
              <th> Name </th>
              <th> Email</th>
            </tr>
          </thead>
          {loading ? ( // Periksa status loading untuk menampilkan pesan loading atau data
            
          <div className="spinner"></div>
          
        ) : (
          <tbody>
            { users.map((user, index) => (
            <tr key =  {user.id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.email}</td>
            </tr>

            ))}

          </tbody>
          ) }

            </table>
         

            <table className='table is-striped is-fullwidth'>
              
            </table>
        </h1>
    </div>
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