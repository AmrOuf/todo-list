import React from 'react';
import './ItemsList.css'

// Does a UI component have to take props?
const ItemsList = (props) => {

    console.log(props);

    // Destructuring
    // Now 'items' is an array of 3 strings
    const {items} = props;

    // next up: do the mapping and return three html templates
    const itemsList = items.map(item => {
        return (
            <li>{item}</li>
        )
    });

    console.log(items);

    return (
        <ul>
            {itemsList}
        </ul>
    );
}

export default ItemsList;