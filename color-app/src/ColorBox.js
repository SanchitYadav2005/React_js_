import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ColorBox.css';
// this is a component that we can use to make copy to clip board functionality.
import {CopyToClipboard} from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

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
        const {name, background, moreUrl, showLink} = this.props;
        const {copied} = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.08;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
             <div className='ColorBox' style={{background}}>
                <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={isDarkColor && "light-text"}>{name}</span>
                    </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                </div>
                {/* The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. */}
                {showLink && (
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                    </Link>
                )}
             </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;