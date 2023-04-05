import React,{Component} from 'react';

class Multipleforms extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        console.log(this.state.username, this.state.password,this.state.email);
        this.setState({username: "", password: "", email: ""})
    }
    render(){
        return(
            <div>
                <h1>Multiple inputs html form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange} 
                        type='text'
                        name='username'
                        value={this.state.username}
                    />
                    <input
                        onChange={this.handleChange}
                        type='password'
                        name='password'
                        value={this.state.password}
                    />
                    <input
                        onChange={this.handleChange}
                        type='email'
                        name='email'
                        value={this.state.email}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Multipleforms;