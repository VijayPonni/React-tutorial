import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <h1>
        I am {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default ClassComponent;
