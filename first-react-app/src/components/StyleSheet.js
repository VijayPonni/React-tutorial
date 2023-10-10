import React from "react";
import "./StyleSheet.css";

function StyleSheetComponent(props) {
  let headingTextColor = props.isPrimary ? "primary" : "";
  return (
    <div>
      <h1 className={`${headingTextColor} big-header`}>
        I am Stylesheet Component
      </h1>
    </div>
  );
}

export default StyleSheetComponent;
