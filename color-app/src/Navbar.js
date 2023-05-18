import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// getting files from material ui 
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// snack bar is for dislplaying messages just like alerts 
import Snackbar from '@mui/material/Snackbar';
// getting icon button library from material ui.
import IconButton from '@mui/material/IconButton';
// getting the close icon.
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
        this.setState({
            // getting the choosed value from the slider and updating the format.
            format: e.target.value, 
            // setting the vlaue of open to true to display the snackbar.
            open: true
        })
        // getting the format and sendging it to the palette component through props.
        this.props.handleChange(e.target.value)
    }
    closeSnackbar(){
        // updating the state to false to close the snackbar. As we have used the onClose property to call this function se the state will update and snackbar will close.
        this.setState({open:false})
    }
    render() {

        // getting these two as props from the palette component .
        const { level, changeLevel} = this.props;
        const {format, open}  = this.state;
        return (
            <header className='Navbar'>
                <Link to='/' className='logo'>reactcolorpicker</Link>
                {this.props.showingAllColors && (
                    <div className='slider-container'>
                    <span className='slider-level'>Level : {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            // calling the function changeLevel that is written inside palette component we are just getting default level from there and sending the changed level there.
                            onChange={changeLevel}
                        />
                    </div>
                </div>
                )}
                <div className='select-container'>
                    {/* setting the default value to be the format that is passed into the state */}
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX- #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA- rgb(255,255,255,0.2)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                // anchorOrigin is a way to set a place where your Snackbar will appear
                    anchorOrigin={{vertical: "bottom", horizontal: "left" }} 
                    open={open} // open is set to false but when the format changes it changes to ture again when the close button is hit it again changes to false.
                    // this is the auto hide duration.
                    autoHideDuration={3000}
                    message={<span className='message-id'>Format Changed!</span>}
                    ContentProps={{
                        "aria-describedby" : "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    // this is deciding the action of that is the close button.
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