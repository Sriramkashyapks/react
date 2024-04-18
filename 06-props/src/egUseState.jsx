import React, { useState } from 'react';

const egUseState = () => {
    const [name, setName] = useState("Thatcher"); // useState is a hook that allows you to have state variables in functional components.
    const [age, setAge] = useState(20);

    const clickEvent = () => {
        // Toggle between different names and ages on each click
        setName(name === "Thatcher" ? "Sriram" : "Thatcher"); // If name is Thatcher, change it to Sriram, else change it to Thatcher
        setAge(age === 20 ? 22 : 20);
    }

    return (
        <div className='w-2/5 text-center outline-pink-500 outline outline-offset-2 mx-auto mt-56 p-5 shadow-2xl shadow-purple-200'>
            <h1 className='text-5xl font-extrabold dark:text-white font-sans ' >Use State</h1>
            <h3 className='mt-8'>I am <b>{name}</b>  and I am currently <b>{age}</b> years old</h3>
            <button onClick={clickEvent} className='py-2.5 px-5 me-2 mt-8 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Click Here</button>
        </div>
    );
}

export default egUseState;