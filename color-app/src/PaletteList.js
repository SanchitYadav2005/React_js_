import React, { Component } from 'react';
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
                    <p>
                        {/* setting up the link to go to the individual palette page */}
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
             </div>
        );
    }
}

export default PaletteList;