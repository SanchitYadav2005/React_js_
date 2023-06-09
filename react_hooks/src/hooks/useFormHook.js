import { useState } from "react";

// you can also define the function like this.
export default initialVal => {
    const [value, updateValue] = useState("");
    const handleChange = (e) =>{
        updateValue(e.target.value)
    }
    const reset = () =>{
        updateValue("")
    }
    return [value, handleChange, reset]
}