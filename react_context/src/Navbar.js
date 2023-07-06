import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';



class Navbar extends Component{
    render(){
        return (
            <div>
                <AppBar position='static' color='primary'>
                    <ToolBar>
                        <IconButton>
                            <span>spain</span>
                        </IconButton>
                        <Typography variant='h6' color="inherit">
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

export default Navbar;