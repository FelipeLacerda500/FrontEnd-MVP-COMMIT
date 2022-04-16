import React from "react";
const BoldSampleText = (props) => {
  return (
    <span
      style={{
        color: "white",
      }}
    >
      <strong>{props.children}</strong>
    </span>
  );
};

export default BoldSampleText;
