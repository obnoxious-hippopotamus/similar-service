import React from 'react';



const MovieItem = (props) => {
    return (
        <div className="eachMovie">
            <img className="moviePoster" src={`https://image.tmdb.org/t/p/original/${props.eachPoster.poster}`} />
        </div>
    )
};









export default MovieItem;