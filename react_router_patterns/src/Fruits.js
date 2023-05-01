import React from 'react';
import { useParams } from 'react-router-dom';



function Fruit(){
        const {name} = useParams()
        const url = `https://source.unsplash.com/1600x900/?${name}`
        return (
             <div className='Fruid'>
                <h1>I love to eat this fruit {name}</h1>
                <img src={url} alt={name}/>
             </div>
        );
}

export default Fruit;