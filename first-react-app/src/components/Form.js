import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topic: "React",
    };
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  commentsChangeHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  topicChangeHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "values : ",
      this.state.userName,
      this.state.comments,
      this.state.topic
    );
  };

  render() {
    const marginRight = { marginRight: "10px" };
    const marginTop = { marginTop: "20px" };
    return (
      <div>
        <h1>Form Component</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={marginRight}>Enter userName</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.userNameChangeHandler}
            />
          </div>
          <div style={marginTop}>
            <label style={marginRight}>Enter Your Comments </label>
            <textarea
              type="text"
              value={this.state.comments}
              onChange={this.commentsChangeHandler}
            ></textarea>
          </div>
          <div style={marginTop}>
            <label style={marginRight}>Topics</label>
            <select value={this.state.topic} onChange={this.topicChangeHandler}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">vue</option>
            </select>
          </div>
          <button style={marginTop} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
