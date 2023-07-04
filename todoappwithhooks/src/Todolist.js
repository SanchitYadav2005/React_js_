import React from "react";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Todo from "./Todo";


function Todolist(props) {
    if(props.todos.length)
    return (
        <Paper>
            <List>
                {props.todos.map((todo, i) => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                            completed = {todo.completed}
                            removeTodo = {props.removeTodo}
                            toggleTodo = {props.toggleTodo}
                            editTodo={props.editTodo}
                        />
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default Todolist;