import "../CSS/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContexts.jsx";


function MovieCard({movie}){
  const {isFavorites, addToFavs, removeFromFavs} = useMovieContext();
  const favorite = isFavorites(movie.id);

  function toggleOnFavorite(e){
   e.preventDefault();
    favorite ? removeFromFavs(movie.id) : addToFavs(movie);
  }

  return(
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : " "}`} onClick={toggleOnFavorite}>
            ♡
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date?.split("-")[0]}</p>

      </div>
    </div>
  );
}
export default MovieCard