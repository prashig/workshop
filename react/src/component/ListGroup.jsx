import React, { useState } from 'react';
function ListGroup({ title, items }) {
    const List = [];
    // const [active, setStateActive] = useState(-1);

    for (let i = 0; i < items.length; i++) {
        List.push(
            <li key={i} className="list-group-item">
                {items[i]}
            </li>
        );
    }
    

    return (
        <>
            <h1>{title} List</h1>
            <ul className="list-group">
                {List}
            </ul>
        </>
    );
}

export default ListGroup;