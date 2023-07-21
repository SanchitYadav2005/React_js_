import React, {createContext, useReducer} from 'react'
import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducer';

const defaultTools = [
    {id:1, task:"do anything", complete: false},
    {id:2, task:"do anything", complete: false},
    {id:3, task:"do anything", complete: false},
]
export const TodoContext = createContext();

export function TodoProvider(props){
    const [todos, dispatch] = useReducer(todoReducer, defaultTools)
    return(
        <TodoContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}
