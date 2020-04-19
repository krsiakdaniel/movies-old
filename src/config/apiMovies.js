// API
// https://www.themoviedb.org/documentation/api/discover
// https://api.themoviedb.org/3/movie/9922?api_key=295bad0176d1e0739cd94f5f2594968b

const BASE_URL_API = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

// IMAGES
// https://api.themoviedb.org/3/configuration?api_key=295bad0176d1e0739cd94f5f2594968b
// http://image.tmdb.org/t/p/w780/1aZfvT2Yc03waSTQjaf9rF2MSLu.jpg
const BASE_URL_IMAGE = 'http://image.tmdb.org/t/p/';
const SIZE_POSTER = 'w500'; // w92, w154, w185, w342, w500, w780, original
const SIZE_BACKDROP = 'w1280'; // w300, w780, w1280, original

// ENDPOINTS
// https://api.themoviedb.org/3/search/movie?api_key=295bad0176d1e0739cd94f5f2594968b&query=postman
// https://api.themoviedb.org/3/movie/popular?api_key=295bad0176d1e0739cd94f5f2594968b
const BASE_URL_MOVIES_SEARCH = `${BASE_URL_API}search/movie?api_key=${API_KEY}&query=`;
const BASE_URL_MOVIES_POPULAR = `${BASE_URL_API}movie/popular?api_key=${API_KEY}`;

export {
  BASE_URL_MOVIES_SEARCH,
  BASE_URL_MOVIES_POPULAR,
  BASE_URL_API,
  API_KEY,
  BASE_URL_IMAGE,
  SIZE_BACKDROP,
  SIZE_POSTER,
};
