import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from 'react-youtube';
import { PlayIcon } from '@heroicons/react/24/outline';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function Banner({results}: {results: any}) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  const [isBanner, setIsBanner] = useState(false);

  const index = results.videos.results.findIndex(
    (element: any) => element.type === "Trailer"
  );

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.mute();
    event.target.playVideo();
  }

  const displayCover: YouTubeProps['onPause'] = (event) => {
    setIsBanner(true);
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
    },
  }; 

  return (
    <div className="relative h-screen mb-7 bg-gradient-from-bl bg-gradient-to-tr from-black">
      <YouTube
        videoId={results.videos?.results[index]?.key}
        opts={opts}
        style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0"}}
        onReady={onPlayerReady}
        onEnd={displayCover}
        onPause={displayCover}
        className={classNames(
          isBanner
            ? 'invisible'
            : 'visible'
        )}
      />
      <Image src={`${BASE_URL}${results.backdrop_path || results.poster_path}`}
        width={330}
        height={210}
        priority={true}
        alt='poster'
        className={classNames(
          isBanner
            ? 'visible'
            : 'invisible',
            'object-cover h-screen w-full'
        )}
      />
      <div className='absolute mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-white top-1/2 transform -translate-y-1/2'>
        <h2 className='text-9xl font-bold mb-4'>{results.original_title}</h2>
        <div className='text-lg mb-7'>{results.overview}</div>
        <button className="flex bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded"
          onClick={() => router.push(`/movie/${results.id}`)}
        >
          <PlayIcon className='h-6 mr-2' /> Watch Movie
        </button>
      </div>
    </div>
  )
}

export default Banner;
