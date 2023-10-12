import React, { Component } from "react";
import InputComponent from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickandler = () => {
    this.inputRef.current.onFocus();
  };

  render() {
    return (
      <div>
        <p>Parent Component</p>
        <InputComponent ref={this.inputRef} />
        <button onClick={this.clickandler}>Click Me !</button>
      </div>
    );
  }
}

export default FocusInput;
