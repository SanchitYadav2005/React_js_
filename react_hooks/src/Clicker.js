// working with useEffect.

import React, {useState,useEffect} from "react";

function Clicker(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })
    return <button onClick={()=>{setCount(count+1)}}>Click me</button>
}

export default Clicker;