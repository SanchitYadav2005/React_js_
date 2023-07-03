import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Todolist from './Todolist';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Clean fish tank", completed: false },
        { id: 2, task: "Wash car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);
    // getting it using the todo form where use input the value and pass it to addTodo there and we are use it here to set the task in our initial todos.
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    }

    const removeTodo = todoId => {
        const updatedTodo = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodo);
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={'center'} style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <Todolist todos={todos} removeTodo={removeTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;