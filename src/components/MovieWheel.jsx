import React from 'react';
import MovieItem from './MovieItem.jsx';


const MovieWheel = (props) => {
  return (
    <ul className="movieWheel">
      {props.moviePosters.map(eachPoster => {
        return (
          <MovieItem eachPoster={eachPoster} />
        )
      })}
    </ul>
  )
};










export default MovieWheel;