import React from "react";

const inlineStyleExample = {
  fontSize: "30px", // Here , font-size stylename is camelcased and value is normal string.
  backgroundColor: "yellow",
  paddingTop: "10px",
};

function Inline() {
  return (
    <div>
      <h1 className="normal">I am check </h1>
      {/* <h1 className={styles.new}>I am check</h1> */}
      <h1 style={inlineStyleExample}>I am Inline...</h1>
      {/* Inline style applied using style attribute  */}
    </div>
  );
}

export default Inline;
