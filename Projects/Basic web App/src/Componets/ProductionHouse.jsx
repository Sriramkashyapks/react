// This component defines a production house section displaying a list of production houses with their logos and associated videos.
// The component utilizes Tailwind CSS for styling and provides interactive hover effects to enhance user experience.
// Each production house item contains an image and a video that plays on hover.

import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'

import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'

function ProductionHouse() {
    // List of production houses with their respective images and videos
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGeographicV
        },
    ]

    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
            {productionHouseList.map((item) => (
                <div key={item.id} className='border-[2px] border-gray-600
                    rounded-lg hover:scale-110 transition-all duration-300
                    ease-in-out cursor-pointer relative shadow-xl 
                    shadow-gray-800'>
                    {/* Video that plays on hover */}
                    <video 
                        src={item.video} 
                        autoPlay 
                        loop 
                        playsInline 
                        muted 
                        className='absolute z-0 top-0 rounded-md 
                        opacity-0 hover:opacity-50'
                    />
                    {/* Production house logo */}
                    <img 
                        src={item.image} 
                        className='w-full z-[1] opacity-100' 
                        alt={`${item.id} logo`} 
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse
