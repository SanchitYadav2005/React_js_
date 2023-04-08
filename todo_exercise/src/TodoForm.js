import React, {Component} from 'react';


class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {work: ""}
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
        const newWork = [...this.state.work]
        this.props.addWork(newWork);
        this.setState({
            work: ""
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.work}
                    name='work'
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm;