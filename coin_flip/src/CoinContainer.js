import React, {Component} from 'react';
import {choice} from './Helpers';
import Coin from './Coin';
class CoinContainer extends Component{
    static defaultProps = {
        coins: [
          {
            side: "heads",
            imgSrc:
              "https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1560713969/irish-two-euro-face_qcuftk.jpg"
          },
          {
            side: "tails",
            imgSrc:
              "https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1560713976/irish-two-euro-reverse_uf62ec.jpg"
          }
        ]
      };
      constructor(props){
        super(props);
        this.state ={
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails:0
        }
        this.handleClick = this.handleClick.bind(this)
      }
      flipTheCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st=>{
            return{
                currCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + (newCoin.side === 'heads' ? 1 : 0),
                numTails: st.numTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
      }
      handleClick(e){
        this.flipTheCoin();
      }
      render(){
        return(
            <div className='CoinContainer'>
                <h2>Flip the coin!!!</h2>
                {/* here we are passing the whole object as a prop if it is not null. */}
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip!!</button>
                <p>Number of flips {this.state.numFlips}, number of heads {this.state.numHeads} and number of tails {this.state.numTails}</p>
            </div>
        )
      }
}

export default CoinContainer;