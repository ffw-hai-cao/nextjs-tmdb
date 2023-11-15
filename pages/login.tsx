import React from 'react';
import Image from "next/image";
import { useState } from 'react';
import { loginData } from './api/tmdb';
import Layout from '../components/Layout';
import { PowerIcon } from '@heroicons/react/24/outline';
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMess] = useState('');

  const handleLogin = async () => {
    try {
      const loginRes = await loginData(username, password);
      if (loginRes) {
        const userId = loginRes.session_id;
        let expires = new Date();
        expires.setDate(expires.getDate() + 1);
        setCookie('userToken', userId, {expires: expires});
        setMess(`<span class="text-green-400">Welcome <b>${username}</b></span>`);
        
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (error) {
      setMess('<span class="text-red-600">Invalid <b class="text-green-400">username</b> or <b class="text-green-400">password</b></span>');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Layout title="Login | The movie friend">
      <div className="mx-auto max-w-screen-md h-96 grid content-center px-4 sm:px-6 lg:px-8">
        <Image 
          data-testid="login-logo"
          className="headr-logo cursor-pointer mx-auto mb-7"
          src="/images/logo.png"
          alt="logo"
          width={200}
          height={54}
          onClick={() => router.push('/')}
        />
        <p className="mb-7 font-semibold text-center text-white text-3xl">Please login to watch the Movies</p>
        <input
          data-testid="login-username"
          type="text"
          placeholder="Username"
          value={username}
          className='form-input w-full mb-5 p-3 text-black'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          data-testid="login-password"
          type="password"
          placeholder="Password"
          value={password}
          className='form-input w-full mb-5 p-3 text-black'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="flex bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded"
          onClick={handleLogin}>
          <PowerIcon className='h-6 mr-2' /> Login
        </button>
        <div className='mt-5 text-base' data-testid="login-message" dangerouslySetInnerHTML={{__html: message}}></div>
      </div>
    </Layout>
  )
}

export default Login;