import React from "react";

function VerticalLine({ bg, ws }) {
    return (
		<div style={{ display: "flex", position: "relative", height: "100%" }}>
			<div
				style={{
					top: ws ? ws : "0.2rem",
					bottom: ws ? ws : "0.2rem",
					position: "absolute",
                    backgroundColor: bg ? bg : "rgb(23, 34, 56)",
                    width: "0.2rem"
				}}
			></div>
		</div>
	);
}

export default VerticalLine;
