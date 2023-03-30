import React, { Component } from "react";
import { randomWord } from "./words";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    // added the images to display the hangman.
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    //A JavaScript Set is a collection of unique values.
  // Each value can only occur once in a Set.
  // A Set can hold any value of any data type.
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this)
  }
  // reset button to reset the whole game. Basically uses this.setState to reset all the states.
  reset(){
    this.setState({
      nWrong: 0, 
      guessed: new Set(),
      answer: randomWord()
    })
  }
  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      //The split() Method
      // split() splits a string into an array of substrings, and returns the array:
      //ex:
      // How,are,you,doing,today?
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    // the statement let ltr = evt.target.value is assigning that current value to the variable ltr using the let keyword, which declares a block-scoped variable.
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateButtons();
    if(isWinner) gameState = "You win"
    if(gameOver) gameState = "You lose"
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]}  alt="img"/>
        <p>Gussed Word: {this.state.nWrong}</p>
        <p className='Hangman-word'>{!gameOver ? this.guessedWord() : this.state.answer}</p>
        <p className='Hangman-btns'>
          {gameState}
        </p>
        <button id="reset" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Hangman;
