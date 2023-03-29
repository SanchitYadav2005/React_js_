import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {num:1}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let rand = Math.floor(Math.random()*10) +1;
        this.setState = {num: rand}
    }
    render(){
        return(
            <div>
                <h1>Number is: {this.state.num}</h1>
                <Button oClick={this.handleClick}>Rnadom Number</Button>
            </div>
        )
    }
}

export default Button;