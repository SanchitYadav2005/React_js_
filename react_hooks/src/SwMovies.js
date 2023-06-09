import React,{useState,useEffect} from "react";

function SwMovies(){
    const [number, setNumber] = useState(1);
    return(
        <div>
            <h1>Pick a movie</h1>
            <h4>You have choosen {number}</h4>
            <select onChange={(e)=> setNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
    )
}
export default SwMovies;
