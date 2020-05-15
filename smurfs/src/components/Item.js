import React from 'react';

const Item = props =>{

    const {name, age, height, id} = props.smurf
    return(
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>height: {height}</p>
            <p>id: {id}</p>
        </div>
    )
}

export default Item;