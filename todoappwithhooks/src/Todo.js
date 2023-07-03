import React from "react";
import ListItem from '@mui/material/ListItem';  
import ListItemText from '@mui/material/ListItemText';

function Todo({task, completed}){
    return(
        <ListItem>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
            
        </ListItem>
    )
}

export default Todo;