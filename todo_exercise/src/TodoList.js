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
    create(newTodos){
        this.setState({
            todos: [...this.state.todos, newTodos]
        })
    }
    render(){
        const todos = this.state.todos.map(todo=>(
           <Todo task={todo.task}/>
        ))
        return(
            <div>
                <h1>TodoList is live</h1>
                <TodoForm createTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;