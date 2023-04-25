import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';


class JokeList extends Component {
    static defaultProps = {
        jokesToGet: 10
    }
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]")
        }
    }
    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes()    
    }
    async getJokes(){
        let jokes = [];
        while (jokes.length < this.props.jokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' }
            });
            jokes.push({
                id:uuid(),
                text: res.data.joke, 
                votes: 0
            })
        }
        this.setState({ jokes: jokes })
        //The JSON.stringify() static method converts a JavaScript value to a JSON string
        // window.localStorage is a local storage.
        // we are using it to store the jokes in local storage.
        //The localStorage object stores data with no expiration date. The data is not deleted when the browser is closed, and are available for future sessions.
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    }
    handleVote(id, delta){
        this.setState(st=>({
            jokes: st.jokes.map(j=>(
                j.id === id ? {...j, votes: j.votes+delta}:j
            ))
        }))
    }
    render() {
        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'>
                        <span>Dad</span> Jokes
                    </h1>
                    <img
                        src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                        alt="Crying Laughing Emoji"
                    />
                    <button className='JokeList-getMore'>New Jokes</button>
                </div>

                <div className='JokeList-jokes'>
                    {this.state.jokes.map(joke => (
                        <Joke key={joke.id} 
                            votes={joke.votes} 
                            text={joke.text} 
                            upvote={()=>this.handleVote(joke.id, 1)}
                            downvote={()=>this.handleVote(joke.id, -1)}
                        />
                    ))}
                </div>
            </div>

        )
    }
}

export default JokeList;