import React, { useEffect, useState } from "react";

function VersionComponent({ children }) {
	const [txt, setTxt] = useState("");
	useEffect(() => {
        fetch("/version.txt") // fetch("ApyxOne-training/version.txt")
			.then((r) => r.text())
			.then((text) => {
				setTxt("asd");
			})
			.catch((e) => console.log(e));
	}, []);
	return (
		<>
			{children}
			<div
				style={{
					position: "absolute",
					right: "1rem",
					bottom: "1rem",
					color: "white",
				}}
			>
				{txt}
			</div>
		</>
	);
}

export default VersionComponent;
