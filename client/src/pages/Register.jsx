import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] =useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://datacolection-server.vercel.app/register', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role:role
      });
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero h-screen bg-gray-200 ">
      <div className="hero-body flex justify-center items-center ">
        <div className="w-full max-w-md mt-12">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <p className="text-center text-red-500 mb-4">{msg}</p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=":(----:("
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=":(----:("
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Sebagai
            </label>
            <div className="control">
                            <div className="select is-fullwidth">
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="admin"> Admin</option>
                                    <option value="user"> Pengguna</option>
                                </select>
                            </div>
                        </div>
          </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
