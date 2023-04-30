import React, { Component } from 'react';


class Fruit extends Component{
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
             <div className='Fruid'>
                <h1>I love to eat this fruit {this.props.name}</h1>
                <img src={url} alt={this.props.name}/>
             </div>
        );
    }
}

export default Fruit;