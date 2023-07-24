import React, { useContext } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggle from "./hooks/useToggle";
import EditForm from "./EditForm";
import { DispatchContext } from "./context/todo.context";

function Todo({ task, completed, id}) {
    const [isEditing, toggle] = useToggle();
    const dispatch = useContext(DispatchContext)
    return (
        <ListItem style={{height: "64px"}}>
            {isEditing ? <EditForm id={id} task={task} toggleEditForm={toggle}/> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={()=>dispatch({type: 'TOGGLE', id: id})} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={()=>dispatch({type: 'REMOVE', id: id})}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default Todo;