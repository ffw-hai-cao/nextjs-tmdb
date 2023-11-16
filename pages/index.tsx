import React, { ReactNode } from 'react';
import { fetchTmdbData, topRatedMovie } from './api/tmdb';
import Head from "next/head";
import Banner from "../components/Banner";
import MoviesCollection from "../components/MoviesCollection";

type DataProps = {
  topRatedMovieData: ReactNode;
  nowPlayingData: ReactNode;
};

const tmdbEndPoint = '/movie/now_playing';

const HomePage: React.FC<DataProps> = ({topRatedMovieData, nowPlayingData}) => {
  return (
      <>
        <Head>
          <title>The Movies Friend</title>
        </Head>
        <Banner results={topRatedMovieData} />
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <MoviesCollection results={nowPlayingData} title="Now Playing Movies" endpoint={tmdbEndPoint} template="default" />
        </div>
      </>
  );
};

export async function getServerSideProps() {
  try {
    const topRatedMovieData = await topRatedMovie();
    const nowPlayingData = await fetchTmdbData(tmdbEndPoint);

    return {
      props: {
        topRatedMovieData,
        nowPlayingData
      },
    };
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
}

export default HomePage;