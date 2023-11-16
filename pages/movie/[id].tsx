import React from 'react';
import { movieDetailData } from '../api/tmdb';
import Head from "next/head";
import YouTube, { YouTubeProps } from 'react-youtube';
import { hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type DataProps = {
  result: any;
};

const Movie: React.FC<DataProps> = ({result}) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if ( hasCookie('login') ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const index = result.videos.results.findIndex(
    (element: any) => element.type === "Trailer"
  );

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }; 

  return (
    <>
      <Head>
        <title>{`${result.original_title} | The movies friend`}</title>
      </Head>
      {isLoggedIn ? (
        <main className="main-wrap">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
						<div className="relative pt-[56.25%] mb-7">
              <YouTube
                videoId={result.videos?.results[index]?.key}
                opts={opts}
                style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0"}}
                onReady={onPlayerReady}
              />
            </div>
            <div className="flex flex-row movie-detail-information">
              <div className="basis-2/3 mr-16">
                <h2 className="text-2xl font-bold mb-3">{result.original_title}</h2>
                <div className="m-0">{result.overview}</div>
              </div>
              <div className="basis-1/3 text-sm">
                <div className="mb-3">
                  <span className="text-gray-400">Genres: </span>
                  {result.genres.map((item: any, i: number, {length}: {length: number}) => {
                    let markup
                    if(i + 1 < length) {
                      markup = (
                        <span key={i} className="text-white">
                          {item.name}
                          <span>, </span>
                        </span>
                      )
                    } else {
                      markup = (
                        <span key={i} className="text-white">
                          {item.name}
                        </span>
                      )
                    }
                    return markup;
                  })}
                </div>
                <div className="mb-3">
                  <span className="text-gray-400">Release date: <span className="text-white">{result.release_date}</span></span>
                </div>
                <div className="mb-3">
                  <span className="text-gray-400">Popularity: <span className="text-white">{result.popularity}</span></span>
                </div>
              </div>
            </div>
          </div>
        </main>
      ): (
        <main className="main-wrap">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            Please<span className="cursor-pointer" onClick={() => router.push('/login')}> Login</span> to watch the movie
          </div>
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const request = await movieDetailData(id);

  return {
    props: {
      result: request
    },
  };
}

export default Movie;