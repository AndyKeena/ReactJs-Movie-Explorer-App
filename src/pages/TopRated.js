import React, { useState, useEffect } from 'react';
import { MovieListStyle, MovieListContainer } from '../styles'; // Import the styles
import {topRatedMovies} from "../components/MovieList";
import {useNavigate} from "react-router-dom";


const TopRated = () => {

    const navigate = useNavigate();
    const navigateToDetails=(id)=>{
        navigate(
            '/details',
            {
                state: {
                    id:id
                }
            }
        )

    }

    return (
        <div>
            <h2><center>Top Rated Movies</center></h2>
            <MovieListContainer>
                {topRatedMovies.map((movie) => (
                    <MovieListStyle key={movie.id}onClick={()=>navigateToDetails(movie.id)}>
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.releaseYear}</p>
                    </MovieListStyle>
                ))}
            </MovieListContainer>
        </div>
    );
};

export default TopRated;
