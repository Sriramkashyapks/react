// This component defines a slider to display a list of trending movies fetched from an API.
// The component utilizes Tailwind CSS for styling and provides horizontal scrolling with interactive arrow buttons for navigation.

import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth

function Slider() {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()

    useEffect(() => {
        getTrendingMovies()
    }, [])

    // Function to fetch trending movies from the API and update state
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    // Function to scroll the slider to the right
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }

    // Function to scroll the slider to the left
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    return (
        <div>
            {/* Left arrow button for sliding left */}
            <HiChevronLeft 
                className="hidden md:block text-white text-[30px] absolute
                mx-8 mt-[150px] cursor-pointer" 
                onClick={() => sliderLeft(elementRef.current)} 
            />
            
            {/* Right arrow button for sliding right */}
            <HiChevronRight 
                className='hidden md:block text-white text-[30px] absolute
                mx-8 mt-[150px] cursor-pointer right-0' 
                onClick={() => sliderRight(elementRef.current)} 
            />
    
            {/* Container for movie images with horizontal scrolling */}
            <div className='flex overflow-x-auto w-full px-16 py-4
            scrollbar-none scroll-smooth' ref={elementRef}> 
                {movieList.map((item) => (
                    <img 
                        key={item.id}
                        src={IMAGE_BASE_URL + item.backdrop_path} 
                        className='min-w-full md:h-[310px] object-cover
                        object-left-top mr-5 rounded-md hover:border-[4px]
                        border-gray-400 transition-all duration-100 ease-in'
                        alt={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider