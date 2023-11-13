import React, { ReactNode } from 'react';
import { fetchTmdbData, topRatedMovie } from './api/tmdb';
import Layout from '../components/Layout';
// import MoviesCollection from "../components/MoviesCollection"

type DataProps = {
  topRatedMovieData: ReactNode;
  nowPlayingData: ReactNode;
};

const HomePage: React.FC<DataProps> = ({topRatedMovieData, nowPlayingData}) => {
  console.log(topRatedMovieData);
  console.log(nowPlayingData);

  return (
    <Layout title="The movie friend">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* <MoviesCollection results={nowPlayingData} title="Now Playing Movies"/> */}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const topRatedMovieData = await topRatedMovie();
  const nowPlayingData = await fetchTmdbData('/movie/now_playing');

  return {
    props: {
      topRatedMovieData,
      nowPlayingData
    },
  };
}

export default HomePage;