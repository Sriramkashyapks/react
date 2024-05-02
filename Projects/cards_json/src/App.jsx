import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [card, setCard] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCard(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>  
      <div className="bg-blue-100  ">
      <Navbar/>
      <div className=" flex flex-wrap p-5 justify-between">
        {card.map((card) => {
          return <div key = {card.id} className="block max-w-md mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-200 hover:text-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="flex items-center text-2xl font-bold">{card.title}</h1>
            <p>{card.body}</p>
            <br />
            <span className="">By UserID: {card.userId}</span>
          </div>
        })}
      </div>
      </div>
    </>
  );
}

export default App;
