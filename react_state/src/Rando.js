import React, {Component} from 'react';

class Rando extends Component{
    constructor(props){
        super(props);
        this.state ={num:0}
        this.maketime();
    }
    maketime(){
        setInterval(() => {
            // generating a random number 
            let rand = Math.floor( Math.random() * this.props.maxNum);
            // changing the state using this.setState funciton.
            this.setState({num: rand});
        }, 1000);
    }
    render(){
        return <h2>{this.state.num}</h2>
    }
}

export default Rando;