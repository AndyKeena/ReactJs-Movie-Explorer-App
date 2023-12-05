import React, { useState, useEffect } from 'react';
import {allMovies} from '../components/MovieList';
import {MovieListContainer, MovieListStyle, input} from "../styles";


const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const filteredMovies = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        console.log(filteredMovies)

        setSearchResults(filteredMovies);
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };



    return (
        <div>
           <center> <h2>Search Movies</h2>
            <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
           </center>

            <MovieListContainer>
                {searchResults.map((movie) => (
                    <MovieListStyle key={movie.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <h3>{movie.title}</h3>
                        <p>{movie.releaseYear}</p>
                    </MovieListStyle>
                ))}
            </MovieListContainer>
        </div>
    );
};

export default Search;
