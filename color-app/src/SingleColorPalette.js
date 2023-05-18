import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state ={format: "hex"}
        this.changeFormat = this.changeFormat.bind(this);
        // here we are creating a instance of the gatherShades to gather the shades of the color and passing the parameter that we are getting as props from the app component and down the line passing it into the function that has the logic to gather the color shades. And we binded the _shades variable to this to make it global, we didn't use state here because we are not changing the color it just the same everytime.
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    }
    // this function helps us to gather the shades of the color explanation is inside.
    // we are getting both parameter as props 
    // 1. we are getting whole palette
    // 2. we are getting the colorId
    gatherShades(palette, colorToFilterBy){
        // creating an empty array to later store the colors.
        let shades = []
        // getting the colors object from the palette.
        let allColors = palette.colors;
        // looping over the colors and finding the shades and using the concat function to combine it.(The concat() method concatenates the string arguments to the calling string and returns a new string.)
        for(let key in allColors){
            shades = shades.concat(
                // later filtering it with the matched color 
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        // returning it and sliced 1 index because its 50 shade means white in term of the component which we have used to generate our color palettes.
        return shades.slice(1);
    }
    changeFormat(val){
        // this is changingt the value of the format after getting the value from the navbar component.
        this.setState({format: val})
    }

    render() {
        const {format} = this.state;
        const {paletteName, emoji} = this.props.palette;
        // and here just maped over the shades and displayed them using our colorBox component.
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                id={color.id}
                name={color.name}
                background={color[format]}
                // this is for the more link to not to display in the single color palette page
                showLink={false}
            />
        ))
        return (
             <div className='Palette'>
                <Navbar
                    handleChange={this.changeFormat}
                    showingAllColors={false}
                />
                <h1>Single Color Palette</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <PaletteFooter
                    paletteName={paletteName}
                    emoji={emoji}
                />
             </div>
        );
    }
}

export default SingleColorPalette;