import { useRouter } from 'next/router';

function Error({ statusCode }: {statusCode: any}) {
  const router = useRouter();

  return (
    <>
      <main className="grid min-h-screen place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">{statusCode}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-50 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <span onClick={() => router.push('/')} className="cursor-pointer rounded-md bg-white hover:bg-gray-300 text-black px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</span>
          </div>
        </div>
      </main>
    </>
  )
}
 
Error.getInitialProps = ({ res, err }: {res: any, err: any}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error;