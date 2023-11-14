import React, { useState } from 'react';
import { searchTmdbData } from './api/tmdb';
import Layout from '../components/Layout';
import MoviesCollection from "../components/MoviesCollection";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSearchChange = async (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);

    try {
      const searchMoviesRes = await searchTmdbData(`/search/movie?query=${value}`);
      setSearchMovies(searchMoviesRes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <Layout title="Search movies | The movies friend">
      <>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search Movies"
            className='bg-transparent p-7 w-full text-center text-2xl mb-14'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          { searchTerm && searchMovies.length !== 0 ? (
            <MoviesCollection results={searchMovies} title={`Search for: ${searchTerm}`} endpoint={`/search/movie?query=${searchTerm}`} template="search" />
          ) : (
            <>
              <div className='text-2xl'>
                No Movies
              </div>
            </>
          )}
        </div>
      </>
    </Layout>
  );
};

export default Search;