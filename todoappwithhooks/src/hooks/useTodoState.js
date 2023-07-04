import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);
    return{
        todos,
        // getting it using the todo form where use input the value and pass it to addTodo there and we are use it here to set the task in our initial todos.
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
        }, 
        removeTodo: todoId => {
            const updatedTodo = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodo);
        },
        toggleTodo:todoId => {
            const updatedTodo = todos.map(todo => 
                    todo.id === todoId ? {...todo, completed: !todo.completed} : todo
                )
            setTodos(updatedTodo)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodo = todos.map(todo => (
                todo.id === todoId ? {...todo, task: newTask} : todo
            ))
            setTodos(updatedTodo)
        }

    }

}