
import stylesheet from "./MovieCard.module.css"




function MovieCard({movie}){

   const flipButton = () => console.log('flipped');

  
    return (
      <div className={stylesheet.cardContainer}>
          <div className={stylesheet.card}>
            <div className={stylesheet.front}> 
            <div className={stylesheet.title} >                 
                <h1 >{movie.title}</h1> 
                </div>
                <div className={stylesheet.details}>            
                <p>{movie.description.substring(0,300)}...</p>
                </div>    
                <button onClick={flipButton} className={stylesheet.btn}>flip</button>      
            </div>
              <div className={stylesheet.front + ' ' + stylesheet.back}>
                <div className={stylesheet.title}>
                <h1>{movie.title}</h1>
                </div>
                <div>
                <p>{movie.title}...</p>
                </div>
                <button onClick={flipButton} className={stylesheet.btn}>flip</button>             
            </div>
          </div>
      </div>
    )
}

export default MovieCard;