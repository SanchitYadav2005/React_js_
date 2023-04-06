import React, {Component} from 'react';
import ShoppingListForm from './ShopingListForm';

class ShopingList extends Component{
    constructor(props){
        super(props);
        this.state = {
            iteams:[
                {name: "tomato", qty: "3"},
                {name: "apple", qty: "5"}
            ],
            // this.renderItems = this.renderItems.bind(this)
        }
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
            <ShoppingListForm/>
          </div>
        );
      }
}

export default ShopingList;