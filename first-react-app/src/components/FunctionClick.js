import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Function click clicked!");
  }

  return (
    <div>
      <button onClick={clickHandler}> I am Function Click! Click ME</button>
    </div>
  );
}

export default FunctionClick;
