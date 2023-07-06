import React, {Component} from "react";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";


class Form extends Component{
    render(){
        return(
            <main>
                <Paper>
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5">Sign in</Typography>
                    <Select value="English">
                        <MenuItem>English</MenuItem>
                        <MenuItem>Hindi</MenuItem>
                        <MenuItem>French</MenuItem>
                    </Select>
                    <Form>
                        <FormControl margin="normal" required fullWidht>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" autoFocus name="email"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidht>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" autoFocus name="password"/>
                        </FormControl>
                        <FormControl
                            control={<Checkbox color="primary"/>}
                            label="remember me  "
                        />
                        <Button variant="contained" type="submit" fullWidth color="primary">Sign in</Button>
                    </Form>
                </Paper>
            </main>
            
        )
    }
}

export default Form;