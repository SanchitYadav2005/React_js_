import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';


class JokeList extends Component {
    static defaultProps = {
        jokesToGet: 10
    }
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }
    async componentDidMount() {
        let jokes = [];
        while (jokes.length < this.props.jokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' }
            });
            jokes.push({
                text: res.data.joke, 
                votes: 0
            })
        }
        this.setState({ jokes: jokes })
    }
    handleVote(id, delta){}
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
                        <Joke votes={joke.votes} text={joke.text}/>
                    ))}
                </div>
            </div>

        )
    }
}

export default JokeList;