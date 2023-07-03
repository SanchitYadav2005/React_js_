import React from "react";
import ListItem from '@mui/material/ListItem';  
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({task, completed}){
    return(
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;