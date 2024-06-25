// This component defines a movie card used for displaying a movie poster in a grid format.
// The component utilizes Tailwind CSS for styling and provides interactive hover effects to enhance user experience.

import React from 'react'

// Base URL for movie images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      {/* Display the movie's poster image */}
      <img 
        src={IMAGE_BASE_URL + movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer 
        hover:scale-110 transition-all duration-150 ease-in'
        alt={`${movie.title} poster`}
      />
    </>
  )
}

export default MovieCard