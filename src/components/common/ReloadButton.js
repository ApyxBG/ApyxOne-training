import React from "react";
import { CircleButton } from "../../styles/Common";
import getIcon from "../../styles/Icons";

const ReloadButton = ({ onClicked, bg, color = "#fff", className = "" }) => {
  return (
    <CircleButton bg={bg} onClick={onClicked} className={className}>
      <span style={{ marginLeft: ".155rem" }}>
        {getIcon("reload", color, "1.8rem", "1.6rem")}
      </span>
    </CircleButton>
  );
};

export default ReloadButton;
