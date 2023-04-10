import React, {Component} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }
    create(newTodos){
        this.setState({
            todos: [...this.state.todos, newTodos]
        })
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }else{
                return todo;
            }
        })
        this.setState({todos: updatedTodos})
    }
    render(){
        const todos = this.state.todos.map(todo=>(
           <Todo 
                key={todo.id} 
                task={todo.task} 
                id={todo.id} 
                removeTodo={this.remove}
                updateTodo = {this.update}
           />
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