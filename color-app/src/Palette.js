import React, { Component } from 'react';

class Palette extends Component{
    render() {
        return (
             <div className='Palette'>
                {/* navbar goes here */}
                <div className='Palette-colors'>{/*buch of color boxes*/}</div>
                {/* footer goes here */}
             </div>
        );
    }
}

export default Palette;