import {useState, useEffect} from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import stylesheet from "./App.module.css"


function App() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const moviesURL = "https://ghibliapi.herokuapp.com/films";

    useEffect(() => {
        fetch(moviesURL)
        .then((response) => {
        return response.json()
        })
        .then((moviesData) => {
          setData(moviesData);
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);
  return (
    <main className={stylesheet.App}>
    <div className={stylesheet.companyContainer}>
      <img src ="movies.png" alt="" />
      <h2 className={stylesheet.description}>About Studio Ghibli</h2>
      <p>Founded in 1985 by animated film directors Isao Takahata and Hayao Miyazaki. Included are the twenty-two feature-length films.Flip the card to see movie rating. </p>
    </div>
    <div className={stylesheet.movieContainer}>
      {data.map((movie, i) => {
        return <MovieCard key ={i} movie={movie} />     
      })}
    </div>
    </main>
  )
   
}

export default App;
