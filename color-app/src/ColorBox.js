import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ColorBox.css';
// this is a component that we can use to make copy to clip board functionality.
import {CopyToClipboard} from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles ={
    colorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button":{
            opacity: 1
        }
    },
    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore:{
        color: 
            props => chroma(props.background).luminance() >= 0.7 ? "black" : "white", 
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton:{
        color: 
            props => chroma(props.background).luminance() >= 0.7 ? "black" : "white", 
        width: "100px",
        height: "30px",
        position: "absloute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "80px",
        marginTop: "60px",
        textAlign: "center",
        outline: "none",
        backgroundColor: "(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: 0
    },
    boxContent:{
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    }
}
class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = {copied: false}
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState(){
        // intially setting up the state to ture and after some time setting it back to false
        // just to remove the overlay animation (if we don't set the state back to false it will always remain to ture.)
        this.setState({copied: true} , ()=>{setTimeout(() => {
            this.setState({copied: false})
        }, 1500);})
        // in my css overlay is not working so I made a alert to diplay whenever someone copies the color.
        alert(`color ${this.props.background} is copied`)
    }
    render() {
        const {name, background, moreUrl, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
             <div className={classes.colorBox} style={{background}}>
                <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
                <div className='copy-container'>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {/* The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. */}
                {showingFullPalette && (
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                )}
             </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);