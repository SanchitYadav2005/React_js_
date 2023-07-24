import React,{useContext} from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todo.context';


// we can also grab the props like this.
function TodoForm() {
    const dispatch = useContext(DispatchContext)
    // we are passing all these values to our costum hook 
    // we are getting the value from our text field.
    const [value, handleChange, reset] = useInputState("")
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form
                onSubmit={e=>{
                    // pereventing the page reloding
                    e.preventDefault()
                    dispatch({type: "ADD", task: value})
                    reset();
                }}
            >
             <TextField 
                value={value} 
                onChange={handleChange}
                margin='normal'
                label="Add a new todo"
                fullWidth
            />

            </form>
            
        </Paper>

    )
}

export default TodoForm;