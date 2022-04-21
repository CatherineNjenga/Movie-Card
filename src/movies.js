import {useEffect} from "react";

function MoviesData (){

    const moviesURL = "https://ghibliapi.herokuapp.com/films";

    useEffect(() => {
        fetch(moviesURL)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
}


export default MoviesData;  