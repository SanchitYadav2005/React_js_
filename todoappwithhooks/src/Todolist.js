import React, { useContext } from "react";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Todo from "./Todo";
import { TodoContext } from "./context/todo.context";


function Todolist() {
    const {todos} = useContext(TodoContext)
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
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