import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Class cliked well");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>I am Class !Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
