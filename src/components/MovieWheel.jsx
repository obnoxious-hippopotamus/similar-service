import React from 'react';
import MovieItem from './MovieItem.jsx';
import uniqid from 'uniqid';






const MovieWheel = (props) => {

  console.log(props)

  return (
   
    <ul className="movieWheel">
      {props.moviePosters.map(eachPoster => {
        return (
          <MovieItem key={uniqid()} eachPoster={eachPoster} />
        )
      })}
    </ul>
  )
};




export default MovieWheel;