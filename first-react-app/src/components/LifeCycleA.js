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

  shouldComponentUpdate() {
    console.log("lifeCycleA shouldComonentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifeCycleA componentDidUpdate");
  }

  clickHandler = () => {
    this.setState({
      name: "SU Vijay",
    });
  };

  render() {
    console.log("LifCycleA render");
    return (
      <div>
        <h1>I am LifeCycleA component </h1>
        <button onClick={this.clickHandler}>Click me to change Name</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
