import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      //   isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Hello User !</div>;

    // return this.state.isLoggedIn ? (
    //   <div> Hello User !</div>
    // ) : (
    //   <div> Hellow Guest !</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello User !</div>;
    // } else {
    //   message = <div>Hello Guest !</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Hello user!</div>;
    // } else {
    //   return <div>Hello Guest!</div>;
    // }
    // return (
    //   <div>
    //     <div>Hello user!</div>
    //     <div>Hello Guest!</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
