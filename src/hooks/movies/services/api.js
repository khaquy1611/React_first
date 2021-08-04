import axios from 'axios';

export const searchMovies = async (keyword = '', page = 1) => {
  const urlMovie = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
  const response = await axios.get(urlMovie);
  const result = response.status === 200 ? response.data : [];
  return result;
}