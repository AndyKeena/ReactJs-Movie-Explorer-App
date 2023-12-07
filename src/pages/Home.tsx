import React, { useState, useEffect } from 'react';
import '../css/MovieDet.css'
import {moviesPopular} from "../components/MovieList";
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

    return (
        <div>
            <h2>
                <center>Popular Movies</center>
            </h2>
            <div className="movie-container">
                {moviesPopular.map((movie) => (
                    <div className="movie-card" key={movie.id} onClick={()=>navigateToDetails(movie.id)}>
                        <img src={movie.image} alt={movie.title}/>
                        <h3>{movie.title}</h3>
                        <p>{movie.releaseYear}</p>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Home;
