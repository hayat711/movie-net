export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const popularMoviesUrl = `${BASE_URL}/popular?api_key=${API_KEY}`;

export const topRatedUrl = `${BASE_URL}/top_rated?api_key=${API_KEY}`;

export const latestUrl = `${BASE_URL}/latest?api_key=${API_KEY}`;

export const nowPlayingUrl = `${BASE_URL}/now_playing?api_key=${API_KEY}`;

export const upComingUrl = `${BASE_URL}/upcoming?api_key=${API_KEY}`;
