This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, clone the project to yyour local:
```bash
git clone git@github.com:ffw-hai-cao/nextjs-tmdb.git
```

Seccond, copy file `env.example` and rename to `.env.local`
Change `your_api_key` and `your_access_token` get from your [[TMDB account]](https://www.themoviedb.org/settings/api)

After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Login:

- Path: http://localhost:3000/login
- Due to limit of TMDB API, user have to login via https://www.themoviedb.org/login.

### Home:

- Path: http://localhost:3000/
- This page shows the Top rate of Movie and Now playing movies

### Search:

- Path: http://locahost:3000/search
- This page implements searching movie names and filtering by genre.