import React, {Component} from 'react';
import axios from 'axios';
const BASE_API_URL = "https://www.deckofcardsapi.com/api/deck/";

class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {deck: null, drawn: []}
        this.getCard = this.getCard.bind(this)
    }
    async componentDidMount(){
        const deck = await axios.get(`${BASE_API_URL}/new/shuffle`);
        this.setState({deck: deck.data})    
    }
    async getCard(){
        let id = this.state.deck.deck_id;
        const cardUrl = `${BASE_API_URL}/${id}/draw`;
        let cardRes = await axios.get(cardUrl)
        console.log(cardRes)
        let card = cardRes.data.cards[0];
        this.setState(st => ({
            drawn: [
                ...st.drawn,
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.suit} of ${card.value}`
                }
            ]
        }))
    }
    render(){
        return(
            <div>
                <h1>Card dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
            </div>
        )
    }
}

export default Deck;