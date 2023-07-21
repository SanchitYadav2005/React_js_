import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodoContext } from './context/todo.context';

function EditForm({id, task, toggleEditForm}){
    const [value, handleChange, reset] = useInputState(task);
    const {editTodo} = useContext(TodoContext)
    return(
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                editTodo(id,value)
                reset()
                toggleEditForm()
            }}
            style={{marginLeft: "0.5rem", width: "100%"}}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditForm;