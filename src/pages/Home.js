import React, { useState, useEffect } from 'react';

import {MovieListContainer, MovieListStyle} from "../styles";import {moviesPopular} from "../components/MovieList";

import {useNavigate} from "react-router-dom";

const Home = () => {

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


    useEffect(() => {
        // You can fetch popular movies from an API or other data source here
        // Update the setMovies with the fetched data
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    return (
        <div>
            <h2>
                <center>Popular Movies</center>
            </h2>
            <MovieListContainer>
                {moviesPopular.map((movie) => (
                    <MovieListStyle key={movie.id} onClick={()=>navigateToDetails(movie.id)}>
                        <img src={movie.image} alt={movie.title}/>
                        <h3>{movie.title}</h3>
                        <p>{movie.releaseYear}</p>
                    </MovieListStyle>
                ))}
            </MovieListContainer>
        </div>
    );
};

export default Home;
