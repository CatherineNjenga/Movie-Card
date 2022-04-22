import stylesheet from "./MovieCard.module.css";

function MovieCard({movie}){
    return (
      <div className={stylesheet.card}>
        <div>
          <h1 className={stylesheet.title}>{movie.title}</h1>
          <p className={stylesheet.description}>{movie.description.substring(0,300)}...</p>
        </div>
      </div>
      )   
}

export default MovieCard;