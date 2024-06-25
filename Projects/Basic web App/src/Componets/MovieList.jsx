// This component defines a movie list that displays movies based on a given genre ID.
// The component utilizes Tailwind CSS for styling and provides arrow buttons for navigation.

import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import HrMovieCard from './HrMovieCard'

function MovieList({ genreId, index_ }) {
    // State variable to store the list of movies fetched from the API
    const [movieList, setMovieList] = useState([])

    // Reference to the DOM element containing the list of movies
    const elementRef = useRef(null)

    // Fetch the movies when the component mounts
    useEffect(() => {
        getMovieByGenreId()
    }, [])

    // Function to fetch movies by genre ID from the API and update state
    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    // Function to scroll the movie list to the right
    const slideRight = (element) => {
        element.scrollLeft += 500
    }

    // Function to scroll the movie list to the left
    const slideLeft = (element) => {
        element.scrollLeft -= 500
    }

    return (
        <div className='relative'>
            {/* Left arrow button for sliding left */}
            <IoChevronBackOutline 
                onClick={() => slideLeft(elementRef.current)} 
                className={`text-[50px] text-white p-2 z-10 cursor-pointer 
                hidden md:block absolute 
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} 
            />
            
            {/* Container for movie images with horizontal scrolling */}
            <div ref={elementRef} className='flex overflow-x-auto gap-8
            scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <>
                        {index_ % 3 === 0 ? 
                            <HrMovieCard key={item.id} movie={item} /> : 
                            <MovieCard key={item.id} movie={item} />
                        }
                    </>
                ))}
            </div>
            
            {/* Right arrow button for sliding right */}
            <IoChevronForwardOutline 
                onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block
                p-2 cursor-pointer z-10 top-0 absolute right-0 
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} 
            />
        </div>
    )
}

export default MovieList