// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BASE_URL, API_KEY, SMALL_IMG_COVER_BASE_URL } from '../../config';

// const MovieDetails = ({ movieId }) => {
//     const [movieDetails, setMovieDetails] = useState(null);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
//                 setMovieDetails(response.data);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };

//         fetchMovieDetails();
//     }, [movieId]);

//     return (
//         <div>
//             {movieDetails ? (
//                 <div>
//                     <h2>{movieDetails.title}</h2>
//                     {movieDetails.poster_path && (
//                         <img src={`${SMALL_IMG_COVER_BASE_URL}/${movieDetails.poster_path}`} alt={movieDetails.title} />
//                     )}
//                     <p>{movieDetails.overview}</p>
//                     <p>Release Date: {movieDetails.release_date}</p>
//                     <p>Rating: {movieDetails.vote_average}</p>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default MovieDetails;


import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import "./style.css"

const Movie_Info = () => {
    const location = useLocation();
    const {state} = location;
    const [data,setData] = useState([]);
  
    
    useEffect(()=>{
        setData(state);
        console.log(data)
    },[state]);

    
    return (
        <div className="container"  style={{
            backgroundImage : `url(${SMALL_IMG_COVER_BASE_URL}${data.backdrop_path})`}}>        
            <div className="movies" key={data.id}>
                <img className="movie-photo" src={`${SMALL_IMG_COVER_BASE_URL}${data.poster_path}`} alt={data.title} />
               <div className="info">
                   <h1 className="info-title">{data.title}</h1>
                   <p className="info-overview">{data.overview}</p>
                   <p className="info-date">{data.release_date}</p>
               </div>
               
            </div>
        </div>
    );
}


export default Movie_Info;