import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}><h2>{movie.title}</h2></Link>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
