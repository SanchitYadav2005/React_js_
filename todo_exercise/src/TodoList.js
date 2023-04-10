import React, {Component} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [{task: "walk the dog"}, {task: "wash the car"}]
        }
        this.create = this.create.bind(this)
    }
    create(newWork){
        this.setState({
            work: [...this.state.work, newWork]
        })
    }
    render(){
        const todos = this.state.todos.map(todo=>(
            <Todo task={todo.task}/>
        ))
        return(
            <div>
                <h1>TodoList is live</h1>
                <TodoForm addWork={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;