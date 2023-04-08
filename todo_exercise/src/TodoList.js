import React, {Component} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            work: ""
        }
        this.create = this.create.bind(this)
    }
    create(newWork){
        this.setState({
            work: [...this.state.work, newWork]
        })
    }
    render(){
        return(
            <div>
                <h1>TodoList is live</h1>
                <TodoForm addWork={this.create}/>
                <Todo work={this.state.work}/>
            </div>
        )
    }
}

export default TodoList;