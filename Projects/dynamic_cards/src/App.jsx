import React from 'react'
import ListItem from './ListItem'
import onePieceImage from './assets/onePiece.jpeg';
import MyHeroAcademia from './assets/MyHeroAcademia.jpeg';
import FullMetalAlchamist from './assets/FullMetalAlchamist.jpeg';
import DragonBallZ from './assets/DragonBallZ.jpeg';
import DeathNote from './assets/DeathNote.jpeg';
import AOT from './assets/AOT.jpeg';



const anime = [
  {
    id: 1,
    name: "One Piece",
    description: "Follow the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure in order to become the Pirate King.",
    ratings: "9.6/10",
    img: onePieceImage,
    reviews: "Great & Animations looks great",
    studios: "AniPlex"
  },
  {
    id: 2,
    name: "Attack on Titan",
    description: "A thrilling action-packed anime set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans.",
    ratings: "9.5/10",
    img: AOT,
    reviews: "Great & Animations looks great",
    studios: "Toei Animation"
  },
  {
    id: 3,
    name: "Death Note",
    description: "A psychological thriller about a high school student who discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.",
    ratings: "9.2/10",
    img: DeathNote,
    reviews: "Great & Animations looks great",
    studios: "Heroku Creations"
  },
  {
    id: 4,
    name: "Dragon Ball Z",
    description: "A classic shonen anime that follows the adventures of Goku and his friends as they defend the Earth from powerful foes and search for the mystical Dragon Balls.",
    ratings: "8.8/10",
    img: DragonBallZ,
    reviews: "Great & Animations looks great",
    studios: "Susume Presentations"
  },
  {
    id: 5,
    name: "My Hero Academia",
    description: "In a world where almost everyone has superpowers known as 'Quirks,' a young boy named Izuku Midoriya dreams of becoming a hero despite being born without powers.",
    ratings: "9.3/10",
    img: MyHeroAcademia,
    reviews: "Great & Animations looks great",
    studios: "Hi Anime"
  },
  {
    id: 6,
    name: "Fullmetal Alchemist: Brotherhood",
    description: "A gripping tale of two brothers, Edward and Alphonse Elric, who use alchemy in their quest to find the Philosopher's Stone and restore their bodies after a failed alchemical experiment.",
    ratings: "9.7/10",
    img: FullMetalAlchamist,
    reviews: "Great & Animations looks great",
    studios: "AniPlix"
  }
];


const App = () => {
  return (
    <div>
      <ListItem data = {anime}/>
    </div>
  )
}

export default App
