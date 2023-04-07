import React, {Component} from 'react';

class NewBoxForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            height: '',
            weight: '',
            color: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createBox(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Height</label>
                    <input
                        value={this.state.height}
                        onChange={this.handleChange}
                        name='height'
                        id='height'
                    />
                    <label>Width</label>
                    <input
                        value={this.state.width}
                        onChange={this.handleChange}
                        name='width'
                        id='width'
                    />
                    <label>Color</label>
                    <input
                        value={this.state.color}
                        onChange={this.handleChange}
                        name='color'
                        id='color'
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default NewBoxForm;