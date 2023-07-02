import React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';

// we can also grab the props like this.
function TodoForm({addTodo}) {
    // we are passing all these values to our costum hook 
    // we are getting the value from our text field.
    const [value, handleChange, reset] = useInputState("")
    return (
        <Paper>
            <form
                onSubmit={e=>{
                    // pereventing the page reloding
                    e.preventDefault()
                    addTodo(value)
                    reset();
                }}
            >
             <TextField value={value} onChange={handleChange}/>
            </form>
            
        </Paper>

    )
}

export default TodoForm;