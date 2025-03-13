import "../CSS/Favorites.css"
import MovieCard from "../Components/MovieCard.jsx";
import {useMovieContext} from "../Contexts/MovieContexts.jsx"
function Favorites(){

  const {favorites, isFavorite} = useMovieContext();

  if(favorites.length > 0){
    return <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
      {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id} />
      ))}
      </div>
  </div>
  }
  else return <div className="favorites-empty">
			<h2>No favorites movie yet</h2>
			<p>Start adding movies to your favorite and they will appear here</p>
        </div>
}
export default Favorites