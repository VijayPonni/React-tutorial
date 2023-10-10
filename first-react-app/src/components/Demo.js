import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;

    return (
      <h1>
        I am {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default ClassComponent;
