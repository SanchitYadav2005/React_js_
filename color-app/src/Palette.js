import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';



class Palette extends Component {
    constructor(props) {
        super(props)
        // here we are defining a starting level of colors.
        this.state = { level: 500, format: "hex" }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(level) {
        // changing the state accoding to the value on the slider. You will get an error through map if you did'nt decide how many steps you want to go.
        this.setState({ level })
    }
    changeFormat(val){
        // this is changingt the value of the format after getting the value from the navbar component.
        this.setState({format: val})
    }
    render() {
        // just refactored this.props.palette.colors and this.state.level.
        const { colors, paletteName, emoji, id} = this.props.palette;
        const { level, format} = this.state;
        // maping over every color and displaying using our ColorBox component
        const colorBoxes = colors[level].map((color) => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                moreUrl={`/palette/${id}/${color.id}`}
                showLink
            />
            
        ))
        console.log(colors)
        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors/>
                <div className='Palette-colors'>{colorBoxes}</div>
                <PaletteFooter
                    paletteName={paletteName}
                    emoji={emoji}
                />
            </div>
        );
    }
}

export default Palette;