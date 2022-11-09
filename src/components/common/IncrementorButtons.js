import React, { useRef } from "react";
import { CircleButton } from "../../styles/Common";
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
	const intervalRef = useRef(null);

	React.useEffect(() => {
		return () => stopCounter();
	}, []);

	const startCounter = (func) => {
		if (intervalRef.current) {
			return;
		}
		func();
		intervalRef.current = setInterval(() => {
			func();
			stopCounter();
			intervalRef.current = setInterval(() => {
				func();
			}, 500);
		}, 1000);
	}

	const stopCounter = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	return (
		<div
			style={{ gap: ".75rem" }}
			className={`d-flex flex-column justify-content-around ${className}`}
		>
			<CircleButton
				bg={bgColor}
				onMouseDown={() => startCounter(increment)}
				onMouseUp={stopCounter}
				onMouseLeave={stopCounter}
			>
				<span style={{ display: "flex", justifyContent: "center" }}>
					<Up width="70%" color={color}></Up>
				</span>
			</CircleButton>
			<CircleButton
				bg={bgColor}
				onMouseDown={() => startCounter(decrement)}
				onMouseUp={stopCounter}
				onMouseLeave={stopCounter}
			>
				<span style={{ display: "flex", justifyContent: "center" }}>
					<Down width="70%" color={color}></Down>
				</span>
			</CircleButton>
		</div>
	);
};

export default IncrementorButtons;
