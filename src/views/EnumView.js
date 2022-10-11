import React from "react";
import Enum from "../styles/Enum";
import getIcon from "../styles/Icons";

function EnumView({ label, icon, isSelected, color, ...restProps }) {
  return (
    <Enum.Wrapper {...restProps} isSelected={isSelected} color={color}>
      <Enum.Icon color={color} icon={`url(${icon})`}>
        {getIcon(icon, isSelected ? color : "#fff")}
      </Enum.Icon>
      <Enum.Text>{label}</Enum.Text>
    </Enum.Wrapper>
  );
}

export default EnumView;
