import React, { ReactNode } from 'react';
import Head from "next/head";
import { userLogout } from "./api/tmdb";
import { PowerIcon } from '@heroicons/react/24/outline';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const UserDetailPage: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const sessionId = getCookie('userToken') as String;
    try {
      const sessionIdRes = userLogout(sessionId);
      deleteCookie('userToken');
      router.push('/login');
    } catch (error) {
      console.error('Error fetching TMDb data:', error);
      throw error;
    }
  };

  return (
    <>
      <Head>
        <title>User | The movie friend</title>
      </Head>
      <div className="mx-auto max-w-screen-md h-96 grid content-center px-4 sm:px-6 lg:px-8">
        <button
          className="flex bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded max-w-fit m-auto"
          onClick={() => handleLogout()}
        >
          <PowerIcon className='h-6 mr-2' /> Logout
        </button>
      </div>
    </>
  )
}

export default UserDetailPage;