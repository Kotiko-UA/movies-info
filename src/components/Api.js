import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWNjZGY4ODIzZjQxMWIxZmU3YzgzZDVhYWFiNWVjMiIsInN1YiI6IjY1MDQ0NGM2ZmZjOWRlMGVkZWQ1ZDA0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1bOyX5jplIjl0Aftwpu8qNZo3aCSMsHeVRvJDduVjA';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// const API_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.3eccdf8823f411b1fe7c83d5aaab5ec2.-1bOyX5jplIjl0Aftwpu8qNZo3aCSMsHeVRvJDduVjA';
export const getTrandingMovies = async () => {
  const resp = await axios.get(`trending/all/day`);
  return resp.data;
};
export const getMovieById = async id => {
  const resp = await axios.get(`movie/${id}`);
  return resp.data;
};
export const getMovieCredits = async id => {
  const resp = await axios.get(`movie/${id}/credits`);
  return resp.data;
};
export const getMovieReviews = async id => {
  const resp = await axios.get(`movie/${id}/reviews`);
  return resp.data;
};
export const getMovieByName = async name => {
  const resp = await axios.get(`search/movie?query=${name}`);
  return resp.data;
};
