const API_KEY = "320c4426f588895e3c5f3f1feb250652";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async() => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if(response.ok){
    const data = await response.json();
    return data.results;
  }
  else{
    console.log("Error");
    return null;
  }
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};