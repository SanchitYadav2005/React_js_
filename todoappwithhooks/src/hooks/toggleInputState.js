import { useState } from "react";

function toggleInputState(initialVal = false){
    const[state, setState] = useState(initialVal);
    const handleChange = () =>{
        setState(!state)
    }
    return [handleChange,state]
}

export default toggleInputState;