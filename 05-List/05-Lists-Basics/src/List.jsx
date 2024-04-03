import { useLayoutEffect } from "react";

function List() {

    const fruits = [{id: 1, fruitName: "apple", calories: 95},
                    {id: 2,fruitName: "orange", calories: 45},
                    {id: 3,fruitName: "banana", calories: 105},
                    {id: 4,fruitName: "coconut", calories: 159},
                    {id: 5,fruitName: "pineapple", calories: 37}]
    // fruits.sort((a, b) => a.fruitName.localeCompare(b.fruitName)); // alpabetical order
    // fruits.sort((a, b) => b.fruitName.localeCompare(a.fruitName)); // non alphabetical order

    // localeCompare is only used for string

    fruits.sort((a, b) => b.calories - a.calories ); // highest calorie on top or reverse numeric order
    // same for numeric order, replace b with a and vice versa 

    // const lowCalories = fruits.filter(fruit => fruit.calories < 100);

    // const highCalories = fruits.filter(fruit => fruit.calories >= 100);

    // const listItems = highCalories.map(highCalories => <li key={highCalories.id}>
    //     {highCalories.fruitName} : &nbsp;
    //     <b>{highCalories.calories}</b>
    //     </li>);


    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.fruitName} : &nbsp;
                                            <b>{fruit.calories}</b>
                                            </li>); 
    //added key beacuse of error of key in console

    return(<ol>{listItems}</ol>);
}
export default List;