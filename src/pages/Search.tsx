import React, { useState, useEffect } from 'react';
import {allMovies} from '../components/MovieLIst';
import {useNavigate} from "react-router-dom";
import '../css/MovieDet.css'

const Search = () => {

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
            <div className="center-container">
                <h2>Search Movies</h2>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="movie-container">
                {searchResults.map((movie) => (
                    <div className="movie-card" key={movie.id} onClick={() => navigateToDetails(movie.id)}>
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.releaseYear}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Search;
