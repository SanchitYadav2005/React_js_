import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root:{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        marginBottom: "5px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors:{
        backgroundColor: "grey",
        height: "150px",
        width: "100%"
    },
    title:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji:{
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColorBox:{
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

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