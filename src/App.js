import {useState, useEffect} from "react";
import MovieCard from './components/MovieCard/MovieCard';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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

    let title = [
      ...new Set(
        data.map((m) => {
          return m.title
        })
      )
    ]

  return (
    <div>
      <MovieCard title={title} />
    </div>
  );
}

export default App;
