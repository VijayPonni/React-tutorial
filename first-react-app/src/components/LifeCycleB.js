import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vijay",
    };
    console.log(" LifeCycleB constructor ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  render() {
    console.log("LifCycleA render");
    return (
      <div>
        <h1>I am LifeCycleB component </h1>
      </div>
    );
  }
}

export default LifeCycleB;
