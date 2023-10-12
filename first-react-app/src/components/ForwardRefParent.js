import React, { Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <p>Forward Ref Parent Component</p>
        <ForwardRefInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default ForwardRefParent;
