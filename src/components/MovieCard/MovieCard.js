import {useState} from "react";
import style from "./MovieCard.css"

function MovieCard({movie}){

  const [click, setClick] = useState(false);
  const flipButton  = () => setClick((flip) => !flip);
 
  return (
    <div className="cardContainer">
        <div className={`card ${click ? "flip": ""}`}>
          <div className="front"> 
          <div className="title">                 
              <h1 >{movie.title}</h1> 
          </div>
              <div className="details">            
                <p>{movie.description.substring(0,300)}...</p>
              </div>    
              <button onClick={flipButton} className="btn">flip</button>      
          </div>
            <div className="back">
              <div className="title">
                <h1>{movie.title}</h1>
              </div>
              <div>
                <p>Rating:{movie.rt_score}</p>
                <p>Release date:{movie.release_date}</p>
                <p>Running time:{movie.running_time} minutes</p>
                <p>Director:{movie.director}</p>
                <p>Producer:{movie.producer}</p>
              </div>
              <button onClick={flipButton} className="btn">flip</button>
            </div>
          
        </div>
    </div>
    )
}

export default MovieCard;