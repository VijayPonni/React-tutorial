import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  incrementFive() {
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
  }

  render() {
    return (
      <div>
        <h1>I am Counter Component</h1>
        <p>Counter is : {this.state.count}</p>
        <button
          onClick={() => {
            // this.increase();
            this.incrementFive();
          }}
        >
          Click to increase count
        </button>
      </div>
    );
  }
}

export default Counter;
