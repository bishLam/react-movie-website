import { createContext, useContext, useEffect, useState } from "react";

const movieContext = createContext();
export const useMovieContext = () => useContext(movieContext );

export const MovieProvider = ({children}) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if(storedFavs) setFavorites(JSON.parse(storedFavs));
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  const addToFavs = (movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavs = (movieID) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieID))
  }

  const isFavorites = (movieID) => {
    return favorites.some(movie => movie.id === movieID)
  }

  // These values will be accecible from everywhere
  const value = {
    favorites, 
    addToFavs,
    removeFromFavs,
    isFavorites,
  }

  return <movieContext.Provider value={value}>
    {children}
  </movieContext.Provider>
};