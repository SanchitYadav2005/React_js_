import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
// this is a component that we can use to make copy to clip board functionality.
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { withStyles } from '@material-ui/styles';


class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = {copied: false, showingFullPalette: true}
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
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
             <div className={classes.colorBox} style={{background}}>
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