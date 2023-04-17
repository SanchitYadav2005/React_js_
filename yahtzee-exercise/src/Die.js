import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  // this is different from other because it's giving back the index that we are passing as a prop in our dice component.
  handleClick(){
    this.props.handleClick(this.props.idx)
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
