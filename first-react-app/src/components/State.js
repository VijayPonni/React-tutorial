import { Component } from "react";
import React from "react";

class StateComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "I am initial State",
    };
  }

  chageState() {
    this.setState({
      message: "Now you are subscribed with use !",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button
          onClick={() => {
            this.chageState();
          }}
        >
          {" "}
          Subscibe
        </button>
      </div>
    );
  }
}

export default StateComponent;
