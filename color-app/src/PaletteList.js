import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component{
    render() {
        // getting palettes as a prop from the seed colors file. And displaying them as link to go details page or individual palettes.
        const{palettes} = this.props;
        return (
             <div>
                <h1>React colors</h1>
                {/* mapping over the palettes to get the detail of individual palette */}
                {palettes.map(palette => (
                    <MiniPalette {...palette }/>
                ))}
             </div>
        );
    }
}

export default PaletteList;