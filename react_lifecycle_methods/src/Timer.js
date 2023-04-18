import React, {Component} from 'react';


class Timer extends Component{
    constructor(props){
        super(props);
        console.log("inside the constructor")
        this.state = {time: new Date()}
    }
    componentDidMount(){
        console.log("inside the component did mount fucntion")
        this.timeId = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }
    render(){
        console.log("inside the render")
        return <h1>{this.state.time.getSeconds()}</h1>
    }
}

export default Timer;