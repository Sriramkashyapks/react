// the main agenda of writing this file is to use API whenever required throughout the repo

import axios from "axios";

// defining API keys using variables
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='5117835a7690fb070e06920909a222c8'

// variable used to discover movies by its genere
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=5117835a7690fb070e06920909a222c8';

//https://api.themoviedb.org/3/trending/all/day?api_key=5117835a7690fb070e06920909a222c8

// get trending videos from the TMDB API
const getTrendingVideos=axios.get(movieBaseUrl+ "/trending/all/day?api_key="+api_key);

// function getMovieByGenreId, takes a genre ID as a parameter and makes a GET req to fetch movies of specified genre
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}