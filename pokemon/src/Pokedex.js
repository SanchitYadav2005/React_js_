import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        // created a title variable to store the winner title or loser title to make it more funcitonal.
        let title;
        if(this.props.isWinner){
            title = <h1 className='Pokegame-winner'>Winner</h1>
        }else{
            title = <h1 className='Pokegame-loser'>Loser</h1>
        }
        return(
            <div className='Pokedex'>
                {title}
                {/* this is adding all pokemons experience */}
                <p>Total Experience: {this.props.exp}</p>
                <div className='Pokedex-cards'>
                    {/* maping over the pokemon default props from pokedex component. */}
                    {this.props.pokemon.map((p)=>(
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;
