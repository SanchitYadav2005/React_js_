import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createTodo({...this.state, id:uuid()});
        this.setState({
            task: ""
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChange}
                    placeholder='new todo'
                    id='task'
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm;