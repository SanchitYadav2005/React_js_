import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler(){
    const [isHappy, toggleIsHappy] = useToggle(true);
    return(
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "😀" : "😢"}</h1>
        </div>
    )
}

export default Toggler;