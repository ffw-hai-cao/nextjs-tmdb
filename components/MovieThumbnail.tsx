import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { BASE_URL } from '../constants';

function MovieThumbnail({ result }: { result: any }) {
    const router = useRouter();

    function truncate(str: string, no_words: number) {
      return str.split(" ").splice(0,no_words).join(" ");
    }

    return (
      <div className="bg-black rounded-lg overflow-hidden cursor-pointer hover:z-10 hover:shadow-4xl transform hover:scale-125 transition duration-300"
        onClick={() => router.push(`/movie/${result.id}`)}>

        <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
          width={330}
          height={210}
          className="object-cover h-48 w-full"
          priority={true}
          alt='poster' />
        <div className='movie-detail p-4'>
          <h3 className='mb-4 text-lg'>{result.original_title}</h3>
          <div className='text-sm'>{truncate(result.overview, 12)}</div>
        </div>
      </div>
    )
}

export default MovieThumbnail;