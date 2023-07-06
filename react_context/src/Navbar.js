import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
// import { makeStyles } from '@mui/styles';
// import styles from './styles/NavBarStyles';



class Navbar extends Component{
    render(){
        // const {classes} = this.props;
        return (
            <div >
                <AppBar position='static' color='primary'>
                    <ToolBar>
                        <IconButton >
                            <span>spain</span>
                        </IconButton>
                        <Typography  variant='h6' color="inherit">
                            App title
                        </Typography>
                        <Switch/>
                        <div />
                        <div >
                            <div >
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='search'/>
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;