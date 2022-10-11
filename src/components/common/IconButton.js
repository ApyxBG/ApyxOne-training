import React from "react";
import { IconButton as IconButtonStyled } from "../../styles/Common";
import getIcon from "../../styles/Icons";

function IconButton({
	color,
	onClick,
	icon,
	label,
	iconColor = "white",
	style = {},
	iconWidth = "1.4rem",
	iconHeight = "1.2rem"
}) {
	return (
		<IconButtonStyled color={color} onClick={onClick} style={style}>
			{!!icon && (
				<span style={{marginLeft: "0.4rem"}}>
					{getIcon(icon, iconColor, iconWidth, iconHeight)}
				</span>
			)}
			<div style={{ flexGrow: 1, color: iconColor }}>{label}</div>
		</IconButtonStyled>
	);
}

export default IconButton;
