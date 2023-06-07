import React from 'react';
import { useState } from 'react';

function CounterHooks(){
    // here we are using useState that takes the initilazed value for the state.
    // it returns two things
    //1. what we have initilazed in the state.
    //2. function to update the state.
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>The count is : {count} </h1>
            <button onClick={()=> setCount(count+1)} >Add 1</button>
        </div>
    )
}

export default CounterHooks;