import React, { Component } from 'react';
// this is the css file of that slider component.
import 'rc-slider/assets/index.css';
// this is a react component that we can use to create slider preaty easily .
import Slider from 'rc-slider';
import './Navbar.css'


class Navbar extends Component {
    render() {

        // getting these two as props from the palette component .
        const { level, changeLevel } = this.props;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span className='slider-level'>Level : {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;