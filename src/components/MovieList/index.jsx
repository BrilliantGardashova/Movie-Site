import React from 'react';
import Card from './Card'; 

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map(movie => (
                <Card key={movie.id} item={movie} />
            ))}
        </div>
    );
};

export default MovieList;
