import React, { ReactNode } from 'react';
import { fetchTmdbData } from './api/tmdb';
import Head from "next/head";
import MoviesCollection from "../components/MoviesCollection";

type DataProps = {
  popularData: ReactNode;
};

const tmdbEndPoint = '/movie/popular';

const Popular: React.FC<DataProps> = ({popularData}) => {
  return (
    <>
      <Head>
        <title>Popular movies | The movies friend</title>
      </Head>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <MoviesCollection results={popularData} title="Popular Movies" endpoint={tmdbEndPoint} template="ddefault" />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const popularData = await fetchTmdbData(tmdbEndPoint);
  
    return {
      props: {
        popularData
      },
    };
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
}

export default Popular;