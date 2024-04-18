import { useState } from "react";

const hooks = () => {

    const [counter, setCounter] = useState(0); // useState is a hook that allows you to have state variables in functional components.

    const addValue = () => { // This function will increase the value of the counter by 1
        setCounter(counter + 1);
    }

    const decreaseValue = () => { // This function will decrease the value of the counter by 1
        setCounter(counter - 1);
    }

    return( 
        <>
        <div className="w-2/5 rounded-xl  text-center outline-pink-500 outline outline-offset-2 mx-auto mt-56 p-5 shadow-2xl shadow-purple-200 flex flex-col flex-wrap">
            <h1 className="text-3xl font-extrabold dark:text-white font-sans ">Counter function</h1>
            <h3 className="p-2 mt-3"> <b>counter:</b> {counter}</h3>
            <button onClick={addValue} className="py-2.5 px-5 me-2 mt-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Value up</button>
            &nbsp; &nbsp;
            <button onClick={decreaseValue} className="py-2.5 px-5 me-2 mt-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >Value down</button>
        </div>
        </>

    );
}
export default hooks;