import React from "react";

const ComponentWithoutJSX = () => {
  return React.createElement(
    "div",
    { className: "dummyClass" },
    React.createElement(
      "h1",
      null,
      "Hello I am simple Functional Component without JSX"
    )
  );
};

export default ComponentWithoutJSX;
