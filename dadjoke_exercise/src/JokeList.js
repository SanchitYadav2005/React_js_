import React, { Component } from 'react';
import axios from 'axios';


class JokeList extends Component{
    static defaultProps = {
        jokesToGet: 10  
    }
    constructor(props){
        super(props);
        this.state = {
            jokes: []
        }
    }
    async componentDidMount(){
        let jokes = [];
        while(jokes.length < this.props.jokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com/",{
            headers: {Accept: 'application/json'}
        });
            jokes.push(res.data.joke)
        }
        this.setState({jokes: jokes})
    }
    render(){
        return(
            <div className='JokeList'>
                <h1>Dad joke</h1>
                <div className='JokeList-jokes'>
                    {this.state.jokes.map(joke => (
                        <div>{joke}</div>
                    ))}
                </div>
            </div>
            
        )
    }
}

export default JokeList;