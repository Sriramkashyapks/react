import React from 'react'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'



function App() {

  return (
    <div className="bg-blue-900 ">
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
    </div>
  )
}

export default App


