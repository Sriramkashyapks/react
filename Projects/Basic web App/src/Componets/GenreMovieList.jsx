//The main agenda of this component is to render a list of movie genres along with a list of movies for each genre
import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {/* Iterate over the genres, only processing the first 8 (index 0 to 7) */}
        {GenresList.genere.map((item,index)=>index<=7&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2> 
                {/* sendding genereId and index as props to MovieList Component */}
                <MovieList genreId={item.id} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList