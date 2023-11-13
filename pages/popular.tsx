import React, { ReactNode } from 'react';
import { fetchTmdbData } from './api/tmdb';
import Layout from '../components/Layout';

type DataProps = {
  popularData: ReactNode;
};

const Popular: React.FC<DataProps> = ({popularData}) => {
  console.log(popularData);

  return (
    <Layout title="Popular movies | The movies friend">
      <>
        <h1>Popular page</h1>
        <>Main content</>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const popularData = await fetchTmdbData('/movie/popular');

  return {
    props: {
      popularData
    },
  };
}

export default Popular;