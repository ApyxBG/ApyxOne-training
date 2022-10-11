import React from "react";

const UnitsDisplay = ({
  action = () => {},
  num,
  unit,
  mr = "1rem",
  fontSize = "2.7rem",
  unitSize = "calc(1.275rem + 0.3vh)",
  color = "white"
}) => {
  return (
    <div
      onClick={action}
      style={{ marginRight: mr, marginTop: ".25rem", color }}
    >
      <span
        style={{ display: "inline-block", fontSize: fontSize }}
        className="me-1"
      >
        {num}
      </span>
      <span style={{ fontSize: unitSize }} className="h4">
        {unit}
      </span>
    </div>
  );
};

export default UnitsDisplay;
