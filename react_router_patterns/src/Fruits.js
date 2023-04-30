import React, { Component } from 'react';


class Fruit extends Component{
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.fruit}`
        return (
             <div className='Fruid'>
                <h1>I love to eat this fruit {this.props.fruit}</h1>
                <img src={url} alt={this.props.fruit}/>
             </div>
        );
    }
}

export default Fruit;