import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
// import { Link } from 'react-router-dom';

// This is a higher-order function that returns a higher-order component used to wrap React components to add styles using the theme. We use this to make themed styles easier to work with.
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
// like this


class PaletteList extends Component {
    goToPalette(id) {
        // passing the url inside the history prop.
        // it adds an entry to the browser's session history stack
        // we are using it like this to add back functionality.
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        // getting palettes as a prop from the seed colors file. And displaying them as link to go details page or individual palettes.
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {/* mapping over the palettes to get the detail of individual palette */}
                        {palettes.map(palette => (
                            // did not definded goToPalette in the constrructor because here we are passing palette id as a parameter.
                            <MiniPalette {...palette} handleClick={()=> this.goToPalette(palette.id)}/>
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);