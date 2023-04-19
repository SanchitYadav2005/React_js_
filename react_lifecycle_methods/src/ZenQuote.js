import React, {Component} from 'react';
import axios from 'axios';

class ZenQuote extends Component{
    constructor(props){
        super(props);
        this.state = {quote: ""}
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response =>{
          this.setState({quote: response.data})  
        })
    }
    render(){
        return(
            <div>
                Alwasys remember ....
                <h1>{this.state.quote}</h1>
            </div>
        )
    }
}

export default ZenQuote;