import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    return <ul>
        {Object.keys(movies).map((movieID)=>(
            <li key={movieID}>
                <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
            </li>
        ))}
    </ul>
}

export default MoviesList;