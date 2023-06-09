import React, {useState, useEffect} from 'react';

function Rover(){
    return(
        <div>
            <h1>Enter date :- </h1>
            <input type="text" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" required />
        </div>
    )
}

export default Rover;