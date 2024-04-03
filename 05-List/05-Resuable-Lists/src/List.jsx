import { useLayoutEffect } from "react";
import PropTypes from "prop-types";

function List(props) {

    const category = props.category;
    const itemLists = props.items;

    const listItems = itemLists.map(item => <li key={item.id}>
                                            {item.fruitName} : &nbsp;
                                            <b>{item.calories}</b>
                                            </li>); 
    //added key beacuse of error of key in console

    return(<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
           </>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number})),
}

List.defaultProps = {
    category: "category",
    items: [],  

}
export default List;