import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '5117835a7690fb070e06920909a222c8';

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

export default {
    getTrendingVideos
};
