import React, {createContext} from 'react'
import useTodoState from '../hooks/useTodoState';

const defaultTools = [
    {id:1, task:"do anything", complete: false},
    {id:2, task:"do anything", complete: false},
    {id:3, task:"do anything", complete: false},
]
export const TodoContext = createContext();

export function TodoProvider(props){
    const todosStuff = useTodoState(defaultTools);
    return(
        <TodoContext.Provider value={todosStuff}>
            {props.children}
        </TodoContext.Provider>
    )
}
