import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const Auth  = async(e) =>{
    e.preventDefault();
    setLoading(true);
    try {
            await  axios.post("https://datacolection-server.vercel.app/login", 
            {
                email:email,
                password:password,
            });
            navigate("/dashboard");
    } catch (error) {
        if (error.response){
            setMsg(error.response.data.msg)
        }

    }
    finally {
      setLoading(false); 
    }
}


  return (
  <section className="bg-gray-200 min-h-screen flex items-center justify-center">
  <div className="container">
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={Auth} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <p className="text-center text-red-500 mb-4">{msg}</p>
          {loading ? (
            <div className="spinner mx-auto"></div>
          ) : (
            <>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Email or Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>

                <p className=''> Belum ada Akun? <a href="/register" class="text-gray-700 hover:text-blue font-bold"> Daftar </a> </p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login