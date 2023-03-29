import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        sides:['one', 'two', 'three', 'four', 'five', 'six']
    }
    
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'two', isRolling:false}
        this.rollDie = this.rollDie.bind(this);
    }
    rollDie(){
        // picking up 2 numbers
        const num1 = this.props.sides[
            Math.floor(Math.random()* 6)
        ];
        const num2 = this.props.sides[
            Math.floor(Math.random() * 6)
        ]
        // setting up the state.
        this.setState({die1: num1, die2: num2, isRolling: true});
        // wait for 1 second to change the isRolling state to false.
        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1000);
    }
    render(){
        return(
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <button onClick={this.rollDie} disabled={this.state.isRolling}>
                    {this.state.isRolling? 'Rolling...' : "Roll Dice !!"}
                </button>
            </div>
        )
    }
}

export default RollDice;