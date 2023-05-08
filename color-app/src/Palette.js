import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';



class Palette extends Component {
    constructor(props) {
        super(props)
        // here we are defining a starting level of colors.
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(level) {
        // changing the state accoding to the value on the slider. You will get an error through map if you did'nt decide how many steps you want to go.
        this.setState({ level })
    }
    changeFormat(e){
        alert(e.target.value)
    }
    render() {
        // just refactored this.props.palette.colors and this.state.level.
        const { colors } = this.props.palette;
        const { level } = this.state;
        // maping over every color and displaying using our ColorBox component
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* footer goes here */}
            </div>
        );
    }
}

export default Palette;