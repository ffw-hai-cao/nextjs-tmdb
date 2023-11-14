import React, { useState } from 'react'
import { fetchTmdbData, searchTmdbData } from '../pages/api/tmdb';
import MovieThumbnail from './MovieThumbnail'

function MoviesCollection({title, results, endpoint, template = 'default'}: {title: string, results: any; endpoint: string, template: String}) {
  const totalPage = results.total_pages;

  const [dataLoadmore, setDataLoadmore] = useState<any[]>([]);
  const [btnStage, setbtnStage] = useState(true);
  const [page, setPage] = useState(2);

  const handleLoadMore = async () => {
    let newData;
    try {
      if (template == "search") {
        newData = await searchTmdbData(endpoint, page);
      } else {
        newData = await fetchTmdbData(endpoint, page);
      }

      if(newData.results && newData.page < totalPage) {
        setDataLoadmore([...dataLoadmore, ...newData.results]);
        setbtnStage(true);
      } else {
        setbtnStage(false);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setPage(page + 1);
  };

  return (
    <div className='relative'>
        <h2 className='font-semibold mb-4 text-5xl mt-7 mb-9'>{title}</h2>
        <div className='grid gap-4 grid-cols-2 md:grid-cols-4'>
          {results.results.map((result: any) => (
              <MovieThumbnail key={result.id} result={result} />
          ))}
          {dataLoadmore.map((result: any) => (
              <MovieThumbnail key={result.id} result={result} />
          ))}
        </div>
        <div className='flex justify-center mt-7'>

          {btnStage ? (
            <button
              onClick={handleLoadMore}
              className='bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded'
            >
                Load More {page - 1}/{totalPage}
            </button>
          ) : (
            <button
              onClick={handleLoadMore}
              className='bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded'
              disabled
            >
                No Movies
            </button>
          )}
        </div>
    </div>
  )
}

export default MoviesCollection;