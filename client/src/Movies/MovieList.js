import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = props => {
  // console.log(props.onTap);
  
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} addToSavedList={props.addToSavedList} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
