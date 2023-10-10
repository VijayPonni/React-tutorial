import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vijay",
    };
    console.log(" LifeCycleA constructor ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  render() {
    console.log("LifCycleA render");
    return (
      <div>
        <h1>I am LifeCycleA component </h1>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
