import React from "react";
import List from "./List";

function App() {

    const fruits = [{id: 1, fruitName: "apple", calories: 95},
                    {id: 2, fruitName: "orange", calories: 45},
                    {id: 3, fruitName: "banana", calories: 105},
                    {id: 4, fruitName: "coconut", calories: 159},
                    {id: 5, fruitName: "pineapple", calories: 37}];

    const vegetables = [{id: 1, fruitName: "potatoes", calories: 110},
                        {id: 2, fruitName: "spinach", calories: 15},
                        {id: 3, fruitName: "carrots", calories: 25},
                        {id: 4, fruitName: "corn", calories: 63},
                        {id: 5, fruitName: "broccoli", calories: 15}];

    return (
        <>
            <List items={fruits} category="Fruits" />
            <List items={vegetables} category="Vegetables" />
        </>
    );
}

export default App;
