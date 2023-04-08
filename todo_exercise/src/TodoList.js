import React, {Component} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            work: "Go to college"
        }
    }
    render(){
        return(
            <div>
                <h1>TodoList is live</h1>
            </div>
        )
    }
}

export default TodoList;