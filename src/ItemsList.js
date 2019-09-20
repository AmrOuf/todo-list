import React from 'react';
import './ItemsList.css'

// Does a UI component have to take props?
const ItemsList = (props) => {

    //console.log("props:", props);

    // Destructuring
    // Now 'items' is an array of 3 objects
    const {items} = props;

    // next up: do the mapping and return three html templates
    const itemsList = items.map(itemObject => {
        
        
        return (
            <li key={itemObject.id} onClick={() => {props.deleteItem(itemObject.id)}}>
                {itemObject.item}
            </li>
        )
    });

    //console.log(itemsList);

    return (
        <ul className="mb-5">
            {itemsList}
        </ul>
    );
}

export default ItemsList;