import React, { ReactNode } from 'react';
import { fetchTmdbData } from './api/tmdb';
import Layout from '../components/Layout';

type DataProps = {
  upcomingData: ReactNode;
};

const Upcoming: React.FC<DataProps> = ({upcomingData}) => {
  console.log(upcomingData);

  return (
    <Layout title="Popular movies | The movies friend">
      <>
        <h1>Upcoming page</h1>
        <>Main content</>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const upcomingData = await fetchTmdbData('/movie/upcoming');

  return {
    props: {
      upcomingData
    },
  };
}

export default Upcoming;