import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vijay",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vijay",
      });
    }, 2000);
  }

  render() {
    console.log("************** Parent Component render ****************");
    return (
      <div>
        <p>Parent Component</p>
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
export default ParentComp;
