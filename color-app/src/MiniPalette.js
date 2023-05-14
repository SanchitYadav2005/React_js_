import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    main:{
        backgroundColor: "purple",
        border: "3px solid teal"
    }
}

function MiniPalette(props){
    const {classes} = props //we are not using this.props because we are not inside a class.
    console.log(classes)
    return(
        <div className={classes.main}>Mini Palette</div>
    );
}

export default withStyles(styles)(MiniPalette);