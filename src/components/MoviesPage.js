import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
    </div>
  );
}
export default MoviesPage;
