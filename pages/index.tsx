import React, { ReactNode } from 'react';
import { fetchTmdbData, topRatedMovie } from './api/tmdb';
import Layout from '../components/Layout';
import Banner from "../components/Banner";
import MoviesCollection from "../components/MoviesCollection";

type DataProps = {
  topRatedMovieData: ReactNode;
  nowPlayingData: ReactNode;
};

const tmdbEndPoint = '/movie/now_playing';

const HomePage: React.FC<DataProps> = ({topRatedMovieData, nowPlayingData}) => {
  return (
    <Layout title="The movie friend">
      <>
        <Banner results={topRatedMovieData} />
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <MoviesCollection results={nowPlayingData} title="Now Playing Movies" endpoint={tmdbEndPoint} />
        </div>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const topRatedMovieData = await topRatedMovie();
  const nowPlayingData = await fetchTmdbData(tmdbEndPoint);

  return {
    props: {
      topRatedMovieData,
      nowPlayingData
    },
  };
}

export default HomePage;