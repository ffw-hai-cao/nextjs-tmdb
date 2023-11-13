import React, { ReactNode } from 'react';
import { fetchTmdbData } from './api/tmdb';
import Layout from '../components/Layout';
import MoviesCollection from "../components/MoviesCollection";

type DataProps = {
  popularData: ReactNode;
};

const tmdbEndPoint = '/movie/popular';

const Popular: React.FC<DataProps> = ({popularData}) => {
  return (
    <Layout title="Popular movies | The movies friend">
      <>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <MoviesCollection results={popularData} title="Popular Movies" endpoint={tmdbEndPoint} />
        </div>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const popularData = await fetchTmdbData(tmdbEndPoint);

  return {
    props: {
      popularData
    },
  };
}

export default Popular;