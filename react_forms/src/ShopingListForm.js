import React, {Component} from "react";

class ShoppingListForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            qty: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addIteams(this.state);
        this.setState({name: "", qty: ""})
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Shoping list form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        value= {this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="qty">Quantity: </label>
                    <input
                        id="qty"
                        value= {this.state.qty}
                        name="qty"
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;