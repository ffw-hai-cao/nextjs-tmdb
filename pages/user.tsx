import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import { PowerIcon } from '@heroicons/react/24/outline';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const UserDetailPage: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    deleteCookie('userToken');
    router.push('/login');
  };

  return (
    <Layout title="User | The movie friend">
      <div className="mx-auto max-w-screen-md h-96 grid content-center px-4 sm:px-6 lg:px-8">
        <button
          className="flex bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded max-w-fit m-auto"
          onClick={() => handleLogout()}
        >
          <PowerIcon className='h-6 mr-2' /> Logout
        </button>
      </div>
    </Layout>
  )
}

export default UserDetailPage;