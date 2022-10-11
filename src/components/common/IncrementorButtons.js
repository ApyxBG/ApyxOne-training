import React from "react";
import { CircleButton } from "../../styles/Common";
import UpIcon from "../../public/images/up.svg";
import DownIcon from "../../public/images/down.svg";
import { CUT_COLOR } from "../../utils/Colors";
import Down from "../../styles/Icons/Down";
import Up from "../../styles/Icons/Up";

const IncrementorButtons = ({
	increment,
	decrement,
	bgColor = CUT_COLOR,
	className = "",
	color = "white",
}) => {
	return (
		<div
			style={{ gap: ".75rem" }}
			className={`d-flex flex-column justify-content-around ${className}`}
		>
			<CircleButton bg={bgColor} onClick={increment}>
				<span style={{ display: "flex", justifyContent: "center" }}>
					<Up width="70%" color={color}></Up>
				</span>
			</CircleButton>
			<CircleButton bg={bgColor} onClick={decrement}>
				<span style={{ display: "flex", justifyContent: "center" }}>
					<Down width="70%" color={color}></Down>
				</span>
			</CircleButton>
		</div>
	);
};

export default IncrementorButtons;
