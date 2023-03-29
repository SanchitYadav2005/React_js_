import React,{Component} from 'react';
import './Box.css';
import { choice } from './helper';

class Box extends Component{
    static defaultProps ={
        allColors:[
            "#cdb4db", 
            "#ffafcc", 
            "#a2d2ff",
            "#f4a261",
            "#e63946",
            "#ff006e",
            "#540b0e",
            "#edafb8",
            "#5f0f40",
            "#ffea00",
            "#588b8b",
            "#364958",
            "#001219",
            "#ea638c",
            "#eef4ed",
            "#e0fbfc",
            "#9381ff",
            "#7bf1a8",
            "#ff6700",
            "#966b9d",
            "#00ffbb",
            "#6b818c",
            "#474973",
        ]
    }
    constructor(props){
        super(props);
        this.state = {color: choice(this.props.allColors)}
        this.handleClick = this.handleClick.bind(this);
    }
    changeColor(){
        let newColor = choice(this.props.allColors);
        this.setState({color: newColor});
    }
    handleClick(){
        this.changeColor();
    }
    render(){
        return(
            <div
             className='Box' 
             style={{backgroundColor: this.state.color}} 
             onClick={this.handleClick}>
            </div>
        )
    }
}

export default Box;