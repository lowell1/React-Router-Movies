import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const [movie, setMovie] = useState(undefined);
 
  useEffect(() => {
    // const id = 1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
      console.log(props.match);
       axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match]);
  
  if (!(movie && props.addToSavedList)) {
    return <div>Loading movie information...</div>;
  }

  // Uncomment this only when you have moved on to the stretch goals
  // if(props.addToSavedList === undefined)
  //   return;

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div className="save-button" onClick={e => saveMovie()}>Save</div>
    </div>
  );
}

export default Movie;
