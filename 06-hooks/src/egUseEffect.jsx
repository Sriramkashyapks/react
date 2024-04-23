import React, { useState, useEffect } from 'react';

function egUseEffect() {
  const [count, setCount] = useState(0);

  const clickEvent = () => {
    setCount(count + 1);

  };

  // Case 1: Run on every render
  useEffect(() => {
    alert("Welcome")

  })

  // Case 2: Run on first render
  useEffect(() => {
    alert("first")

  }, [])

  // Case 3: Run only on certain values
  useEffect(() => {
    alert("count was changed")
  }, [count])


  return (
    <>
        <div className="w-2/5 rounded-xl  text-center outline-purple-500 outline outline-offset-5 mx-auto mt-5 p-5 shadow-2xl shadow-pink-200 flex flex-col flex-wrap">
        <h1 className='text-5xl font-extrabold dark:text-black font-sans'>Use State</h1>
        <h1 className='text-lg font-extrabold dark:text-black font-sans'>Value: {count}</h1>
        <button
          onClick={clickEvent}
          className='py-2.5 px-5 me-2 mt-8 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
          Click Here
        </button>
      </div>
    </>
  );
}

export default egUseEffect;
