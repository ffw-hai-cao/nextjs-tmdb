export const fetchTmdbData = async (endpoint: String, page: Number = 1) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const tmdbUrl = `https://api.themoviedb.org/3${endpoint}?api_key=${apiKey}&language=en-US&page=${page}`;

    const response = await fetch(tmdbUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Something went wrong with the API request');
    }
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
};

export const searchTmdbData = async (endpoint: String, page: Number = 1) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const tmdbUrl = `https://api.themoviedb.org/3${endpoint}&api_key=${apiKey}&language=en-US&page=${page}`;

    const response = await fetch(tmdbUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Something went wrong with the API request');
    }
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
};

export const movieDetailData = async (mid: Number) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const tmdbUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${apiKey}&language=en-US&append_to_response=videos`;

    const response = await fetch(tmdbUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Something went wrong with the API request');
    }
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
};

export const topRatedMovie = async () => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const topRateUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    const topRatedRes = await fetch(topRateUrl);
    const topRatedData = await topRatedRes.json();

    if (topRatedRes.ok) {
      const topRateMid = topRatedData.results[0].id;
      const topRateMidUrl = `https://api.themoviedb.org/3/movie/${topRateMid}?api_key=${apiKey}&language=en-US&append_to_response=videos`;

      const topRateMidRes = await fetch(topRateMidUrl);
      const topRateMidData = await topRateMidRes.json();

      if (topRateMidRes.ok) {
        return topRateMidData;
      } else {
        throw new Error(topRateMidData.message || 'Something went wrong with the API request');
      }
    } else {
      throw new Error(topRatedData.message || 'Something went wrong with the API request');
    }
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
};

export const loginData = async (username: String, password: String) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const requestTokenUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;

    const requestTokenRes = await fetch(requestTokenUrl);
    const requestToken = await requestTokenRes.json();

    if (requestToken.success) {
      const validateLoginUrl = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}&request_token=${requestToken.request_token}&username=${username}&password=${password}`;

      const validateLoginRes = await fetch(validateLoginUrl);
      const validateLogin = await validateLoginRes.json();

      if (validateLogin.success) {
        const sessionUidUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken.request_token}`;

        const sessionUidRes = await fetch(sessionUidUrl);
        const sessionUid = await sessionUidRes.json();

        if (sessionUid.success) {
          return sessionUid;
        } else {
          throw new Error(sessionUid.message || 'Something went wrong with the API request');
        }
      } else {{
        throw new Error(validateLogin.message || 'Something went wrong with the API request');
      }}
    } else {
      throw new Error(requestToken.message || 'Something went wrong with the API request');
    }
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    throw error;
  }
};
