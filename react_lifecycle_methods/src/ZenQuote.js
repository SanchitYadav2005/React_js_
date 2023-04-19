import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuotes.css'

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: "" }
    }
    componentDidMount() {
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({ quote: response.data })
        })
    }
    render() {
        return (
            <div>
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
                Alwasys remember ....
                 <h1>{this.state.quote}</h1>
            </div>
        )
    }
}

                export default ZenQuote;