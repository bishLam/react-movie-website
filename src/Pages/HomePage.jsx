import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import "../CSS/Home.css"
import { searchMovies, getPopularMovies } from "../Services/api";


function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies || []);
      }
      catch (err) {
        console.log(err);
        setError("Failed to load movies..")
      }
      finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearchMovie = async (e) => {
    e.preventDefault();

    if(!searchQuery.trim()) return 
    if(loading) return
    setLoading(true);

    try{
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults || []);
      setError(null);

    }
    catch(err){
      console.log(err);
      setError("Failed to load movies")
    }
    finally{
      setLoading(false)
    }

  };

  return (
    <div className="home">
      <form onSubmit={handleSearchMovie} className="search-form">
        <input
          value={searchQuery}
          type="text"
          placeholder="Search for a movie.."
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* if there is an error message, display it */}
      {error && <div className="error-message">{error}</div>}

      {loading ? <div>Loading...</div> : 
      <div className="movies-grid">
        {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />
        ))}
      </div>}
    </div>
  );
}
export default HomePage