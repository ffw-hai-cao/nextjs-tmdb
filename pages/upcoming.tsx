import React, { ReactNode } from 'react';
import { fetchTmdbData } from './api/tmdb';
import Head from "next/head";
import MoviesCollection from "../components/MoviesCollection";

type DataProps = {
  upcomingData: ReactNode;
};

const tmdbEndPoint = '/movie/upcoming';

const Upcoming: React.FC<DataProps> = ({upcomingData}) => {
  return (
    <>
      <Head>
        <title>Upcoming movies | The movies friend</title>
      </Head>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <MoviesCollection results={upcomingData} title="Upcoming Movies" endpoint={tmdbEndPoint} template="ddefault" />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const upcomingData = await fetchTmdbData(tmdbEndPoint);
  
    return {
      props: {
        upcomingData
      },
    };
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
}

export default Upcoming;