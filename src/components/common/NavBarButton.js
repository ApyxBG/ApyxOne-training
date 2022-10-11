import React from "react";
import { CircleButton } from "../../styles/Common";
import getIcon from "../../styles/Icons";

function NavBarButton({ onClick, icon }) {
  return (
    <CircleButton bg="rgb(39,50,78)" onClick={onClick}>
      {typeof icon === "string" ? getIcon(icon, "#fff", "28px", "25px") : icon}
    </CircleButton>
  );
}

export default NavBarButton;
