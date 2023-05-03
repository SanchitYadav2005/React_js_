import { Component } from 'react';
import './App.css';
import brett from './imgs/brett.jpg';
import caesar from './imgs/caesar.jpg';
import dom from './imgs/dom.jpg'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Brett",
        age: 5,
        src: brett,
        facts: [
          "Brett loves eating popcorn.",
          "Brett is a terrible guard dog.",
          "Brett wants to cuddle with you!"
        ]
      },
      {
        name: "Caesar",
        age: 3,
        src: caesar,
        facts: [
          "Caesar has soooo much energy!",
          "Caesar is highly intelligent.",
          "Caesar loves people more than dogs."
        ]
      },
      {
        name: "Dom",
        age: 4,
        src: dom,
        facts: [
          "Dom is not the brightest dog",
          "Dom does not like walks or exercise.",
          "Dom loves eating food."
        ]
      }
    ]
  };
  render() {
    return (

      <div className="App">
        <h1 className='display-1'>Dog App</h1>
      </div>
    );
  }
}

export default App;
