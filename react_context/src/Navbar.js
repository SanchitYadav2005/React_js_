import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { withStyles } from "@mui/styles"
import styles from './styles/NavBarStyles';



class Navbar extends Component{
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position='static' color='primary'>
                    <ToolBar>
                        <IconButton className={classes.menuButton}>
                            <span>spain</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color="inherit">
                            App title
                        </Typography>
                        <Switch/>
                        <div className={classes.grow}/>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);