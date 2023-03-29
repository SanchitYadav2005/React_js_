import React, {Component} from 'react';
import Rando from './Rando.js';

class Game extends Component{
    render(){
        return(
           <h2>Your Score: <Rando maxNum={7}/></h2>
        )
    }
}

export default Game;