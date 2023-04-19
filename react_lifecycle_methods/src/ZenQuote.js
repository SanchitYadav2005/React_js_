import React, {Component} from 'react';
import axios from 'axios';

class ZenQuote extends Component{
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response =>{
            console.log(response);
        })
    }
    render(){
        return(
            <div>
                Alwasys remember ....
            </div>
        )
    }
}

export default ZenQuote;