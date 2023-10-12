import React, { Component } from "react";

class InputComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  onFocus() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <p>Input Component</p>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default InputComponent;
