import React, {Component} from 'react';

class ScoreKeeps extends Component{
    constructor(props){
        super(props);
        this.state = {score: 0}
        this.singleShot = this.singleShot.bind(this)
        this.tripleShot = this.tripleShot.bind(this)
    }
    singleShot(){
        this.setState({score: this.state.score + 1})
    }
    // tripleShot(){
    //     // it will also increase only one because as we know state woks Asyncronous.
    //     this.setState({score: this.state.score + 1})
    //     this.setState({score: this.state.score + 1})
    //     this.setState({score: this.state.score + 1})
    // }
    // Abstracting state updates.
    increamentScore(curState){
        return{score: curState.score+1}
    }
    tripleShot(){
        this.setState(this.increamentScore)
        this.setState(this.increamentScore)
        this.setState(this.increamentScore)
    }
    render(){
        return(
            <div>
                <h1>Score: {this.state.score}</h1>
                <button onClick={this.singleShot}>Single shot!</button>
                <button onClick={this.tripleShot}>Triple shot!!!</button>
            </div>
        )
    }
}

export default ScoreKeeps;