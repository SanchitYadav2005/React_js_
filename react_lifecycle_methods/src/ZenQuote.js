import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuotes.css'

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: "", isLoaded: false }
    }
    componentDidMount() {
        axios.get("https://api.github.com/zen").then(response => {
            setInterval(
                function() {
                this.setState({quote: response.data, isLoaded: true})
            }.bind(this),
            3000);
        })
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                    Alwasys remember ....
                    <h1>{this.state.quote}</h1>
                   </div>
                ) : (
                    <div class="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                )
            }
            </div>
        )
    }
}

export default ZenQuote;