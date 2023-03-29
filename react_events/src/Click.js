import React, {Component} from 'react';
import { choice } from './helpers';

class Click extends Component{

    constructor(props){
        super(props);
        this.state={imgSrc: choice(this.props.src)}
        this.handleEvent = this.handleEvent.bind(this)
    }
    changeImgSrc(){
        this.setState({imgSrc: choice(this.props.src)});
    }
    handleEvent(){
        this.changeImgSrc();
    }
    render(){
        return(
            <img 
            src={this.state.imgSrc} 
            alt="cars" 
            onMouseEnter={this.handleEvent}
            onMouseLeave={this.handleEvent}
            />
        )
    }
}

export default Click;