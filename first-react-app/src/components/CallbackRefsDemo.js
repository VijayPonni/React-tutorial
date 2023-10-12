import React, { Component } from "react";

class CallbackRefsDemo extends Component {
  constructor(props) {
    super(props);

    this.callBackRef = null; // 1) Creating new property with null value in constructor.

    // 2) Creating a new method and assign the Ref with the parameter value.
    this.setCallBackRef = (element) => {
      this.callBackRef = element;
    };
  }

  componentDidMount() {
    // 4 ) Accessing the CallBackRef methods/properties we need
    if (this.callBackRef) {
      this.callBackRef.focus();
    }
  }

  render() {
    return (
      <div>
        <p>CallbackRefs Approach</p>
        {/* 3 ) Setting the ref attribute with newly created method where we assign the Ref property value to element  */}
        <input type="text" ref={this.setCallBackRef} />{" "}
      </div>
    );
  }
}

export default CallbackRefsDemo;
