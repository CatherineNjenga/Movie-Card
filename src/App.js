import {useState, useEffect} from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import './App.css';

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
          console.log(moviesData)
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);

    // let title = [
    //   ...new Set(
    //     data.map((m) => {
    //       return m.title
    //     })
    //   )
    // ]
    // let description = [
    //   ...new Set(
    //   data.map((m) => {
    //     return m.description
    //   })
    //   )
    // ]

  return (
    <div>
      {/* <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul> */}
      {data.forEach((movie) => {
        return <MovieCard movie={movie} />
      })}  
    </div>
  );
}

export default App;
