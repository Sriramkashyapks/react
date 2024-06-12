import { useState } from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-900 '>
     <Header/>
     <Slider/>
    </div>
  )
}

export default App
