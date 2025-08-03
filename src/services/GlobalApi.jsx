// src/api/GlobalApi.js (or wherever your file is located)
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "994d1ab419b9d3575ffe93d26db49fdb";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=994d1ab419b9d3575ffe93d26db49fdb';

const getTrendingVideos = () => {
  return axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

const getMoviesById= (id) => {
  return axios.get(movieByGenreBaseURL+"&with_genres="+id)
}

const GlobalApi = {
  getTrendingVideos,
  getMoviesById
};

export default GlobalApi;
