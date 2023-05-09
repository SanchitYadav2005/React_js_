import React, { Component } from 'react';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// this is the css file of that slider component.
import 'rc-slider/assets/index.css';
// this is a react component that we can use to create slider preaty easily .
import Slider from 'rc-slider';
import './Navbar.css'


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { format: "hex", open:false}
        this.handleChange = this.handleChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleChange(e){
        this.setState({format: e.target.value, open: true})
        this.props.handleChange(e.target.value)
    }
    closeSnackbar(){
        this.setState({open:false})
    }
    render() {

        // getting these two as props from the palette component .
        const { level, changeLevel} = this.props;
        const {format, open}  = this.state;
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
                <div className='select-container'>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX- #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA- rgb(255,255,255,0.2)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left" }} 
                    open={open}
                    autoHideDuration={3000}
                    message={<span className='message-id'>Format Changed!</span>}
                    ContentProps={{
                        "aria-describedby" : "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit' key="close" aria-describedby='close'>
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />

            </header>
        );
    }
}

export default Navbar;