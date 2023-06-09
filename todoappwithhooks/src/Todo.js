import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggle from "./hooks/useToggle";
import EditForm from "./EditForm";

function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle();
    return (
        <ListItem style={{height: "64px"}}>
            {isEditing ? <EditForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
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