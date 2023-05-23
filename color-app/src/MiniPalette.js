import React from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';



function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props //we are not using this.props because we are not inside a class.
    const miniColorBoxes = colors.map(color => (
        <div
          className={classes.miniColorBox}
          style={{ backgroundColor: color.color }}
          key={color.name}
        />
      ));
    return(
        // and from here we are passing the url to the history prop using the function that is passed as prop.
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette); 