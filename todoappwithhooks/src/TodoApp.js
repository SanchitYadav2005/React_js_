import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Todolist from './Todolist';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';
import { TodoProvider } from './context/todo.context';

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]")
    const { todos} = useTodoState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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
                    <TodoProvider>
                        <TodoForm/>
                        <Todolist/>
                    </TodoProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;