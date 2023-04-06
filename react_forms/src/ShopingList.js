import React, {Component} from 'react';
import ShoppingListForm from './ShopingListForm';
import { v4 as uuid } from 'uuid';

class ShopingList extends Component{
    constructor(props){
        super(props);
        this.state = {
            iteams:[
                {name: "tomato", qty: "3", id:uuid()},
                {name: "apple", qty: "5", id:uuid()}
            ]
        }
        this.addIteams = this.addIteams.bind(this)
    }
    addIteams(iteams){
        this.setState(oldState => ({
            iteams: [...oldState.iteams, iteams]
        }))
    }
    renderIteams() {
        return (
          <ul>
            {this.state.iteams.map(iteam => (
              <li key={iteam.id}>
                {iteam.name}: {iteam.qty}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (
          <div>
            <h1>Shopping List</h1>
            {this.renderIteams()}
            <ShoppingListForm addIteams={this.addIteams}/>
          </div>
        );
      }
}

export default ShopingList;