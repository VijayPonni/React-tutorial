import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();

    this.state = {
      message: "I am initial State Hello!",
    };
  }

  // clickHandler() {
  //   console.log("this", this);
  //   this.setState({
  //     message: "I am changed to NEW STATE",
  //   });
  // }

  // approach 4 : Event handler function as Arrow function
  clickHandler = () => {
    console.log("this", this);
    this.setState({
      message: "I am changed to NEW STATE",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>
          Click Me to Change the State
        </button> */}

        {/* <button onClick={() => this.clickHandler()}>
          Click Me to Change the State
        </button> */}

        <button onClick={this.clickHandler}>
          Click Me to Change the State
        </button>
      </div>
    );
  }
}

export default EventBind;
