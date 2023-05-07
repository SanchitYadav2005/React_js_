import React, { Component } from 'react';
import ColorBox from './ColorBox';
// this is the css file of that slider component.
import 'rc-slider/assets/index.css';
import './Palette.css';
// this is a react component that we can use to create slider preaty easily .
import Slider from 'rc-slider';


class Palette extends Component {
    constructor(props) {
        super(props)
        // here we are defining a starting level of colors.
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level) {
        // changing the state accoding to the value on the slider. You will get an error through map if you did'nt decide how many steps you want to go.
        this.setState({ level })
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
                <div className='slider'>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={this.changeLevel}
                    />
                </div>
                {/* navbar goes here */}
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* footer goes here */}
            </div>
        );
    }
}

export default Palette;