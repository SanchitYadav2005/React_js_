import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) }
        this.handleClick = this.handleClick.bind(this)
    }
    generate() {
        this.setState(currentState => ({
            nums: currentState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }
    handleClick() {
        this.generate();
    }
    render() {
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => (
                        <Ball num={n} />
                    ))}
                </div>
                <button onClick={this.handleClick}>Draw Lotto Balls</button>
            </section>
        )
    }
}

export default Lottery;