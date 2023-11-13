import React, { ReactNode } from 'react';
import { fetchTmdbData } from './api/tmdb';
import Layout from '../components/Layout';
import MoviesCollection from "../components/MoviesCollection";

type DataProps = {
  upcomingData: ReactNode;
};

const tmdbEndPoint = '/movie/upcoming';

const Upcoming: React.FC<DataProps> = ({upcomingData}) => {
  return (
    <Layout title="Upcoming movies | The movies friend">
      <>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <MoviesCollection results={upcomingData} title="Upcoming Movies" endpoint={tmdbEndPoint} template="ddefault" />
        </div>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const upcomingData = await fetchTmdbData(tmdbEndPoint);

  return {
    props: {
      upcomingData
    },
  };
}

export default Upcoming;