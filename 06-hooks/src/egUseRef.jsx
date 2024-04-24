// useRef is used to access the DOM element directly. 
// It is used to store the reference of the DOM element then access the DOM element directly.

import React, { useState, useEffect, useRef } from 'react'

function egUseRef() {
    const [counter, setCounter] = useState(0);
    // let a = 0;
    const a = useRef(0)
    const ref = useRef();

    const update = () => {
        setCounter(counter + 1)
    }
    
    useEffect(() => {
        a.current = a.current + 1; //a = a+1
      console.log(`rerendering, The value of a is ${a.current}`);
      ref.current.style.backgroundColor = 'red';

    })
    
  return (
    <div className='p-5 border-2 border-rose-300 max-w-2xl text-center ml-96 outline-offset-4 outline-red-500 mt-56  flex-col flex-wrap '>
      <h1 className='text-5xl font-sans p-5'>Use Ref</h1>
      <h1 className='text-lg font-sans p-3'>Count : {counter}</h1>
      {/* <button ref={ref} onClick={update} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        add
        </span>
        </button> */}
        <button ref={ref} onClick={update}>value : {counter}</button>
    </div>
  )
}

export default egUseRef
