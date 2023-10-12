import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.firstInputRef = React.createRef(); // 1 ) Creating New Property with React.createRef()
  }

  componentDidMount() {
    this.firstInputRef.current.focus(); // 3 ) Calling required methods using `current` property in the Ref Property.
    console.log("Input Ref property", this.firstInputRef); // Consoling the Ref Propert
  }

  clickhandler = () => {
    console.log("inputRef", this.firstInputRef.current.value);
    alert("value is :" + this.firstInputRef.current.value); // Accessing the value property of the `current` property.
  };

  render() {
    return (
      <div>
        <p>RefsComponent</p>
        <input type="text" ref={this.firstInputRef} />
        {/* 2 ) Assigning the new property with ref attribute in the element */}
        <button onClick={this.clickhandler}>Click Me to fetch data</button>
      </div>
    );
  }
}

export default RefsDemo;
