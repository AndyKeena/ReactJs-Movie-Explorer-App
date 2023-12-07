import React from 'react';
import {useLocation} from "react-router-dom";
import {allMovieDescription} from '../components/MovieList';
import '../css/MovieDet.css'

const MovieDetail = ({ movie }) => {
  const location = useLocation();
  const { id } = location.state;
  const selectedMovie = allMovieDescription.find(movie => movie.id === id);
  if (!selectedMovie) {
    return <div>Error: Movie not found</div>;
  }
  return (
      <>
          <h1 class = 'title'>{selectedMovie.title}</h1>
          <center><img class = 'movieDetails' src={selectedMovie.image} alt={selectedMovie.title }/></center>
          <p class = 'movieDetails'>{selectedMovie.description}</p>
          <p class = 'movieDetails'>Release Year: {selectedMovie.releaseYear}</p>
      </>

  );
};

export default MovieDetail;