// This component defines a horizontal movie card used for displaying movie information in a grid format.
// The component utilizes Tailwind CSS for styling and provides interactive hover effects to enhance user experience.

import React from 'react'

// Base URL for movie images
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
      {/* Display the movie's backdrop image */}
      <img 
        src={IMAGE_BASE_URL + movie.backdrop_path} 
        className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer'
        alt={`${movie.title} backdrop`}
      />
      {/* Display the movie's title */}
      <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard