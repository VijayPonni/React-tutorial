import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <div style={{ background: "green", padding: 10 }}>
        <p>I am child component!</p>
        <button onClick={() => props.greetHandler("Child")}>
          I am a button from Child Component. If you click on me , I will call a
          method in my parent component
        </button>
      </div>
    </div>
  );
}

export default ChildComponent;
