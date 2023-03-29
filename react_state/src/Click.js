import React, {Component} from 'react';


class Click extends Component{
    constructor(props){
        super(props);
        this.state = {clicked: false}
        // setting up the this.handleClick to this.handleClick.bind(this) unless it's broken click.
        //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
        this.handleClick = this.handleClick.bind(this);
    }
    // function to handle the click event.
    handleClick(e){
        this.setState({clicked: true})
    }

    render(){
        return(
            <div>
                <h1>{this.state.clicked ? 'Clicked!!!' : 'Not clicked'}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default Click;