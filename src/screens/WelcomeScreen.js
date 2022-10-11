import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import MainContainer from "../components/common/MainContainer";
import { Line1, Line2 } from "../store/WelcomeScreen";
import RenuvionTopLogo from "../public/images/RenuvionTopLogo.svg";
import RenuvionBottomLogo from "../public/images/RenuvionBottomLogo.svg";

function WelcomeScreen({ children }) {
	const [showChildren, setShowChildren] = useState(false);
	const line1 = useRecoilValue(Line1);
	const line2 = useRecoilValue(Line2);
	useEffect(() => {
		setTimeout(() => setShowChildren(true), 3000);
	}, []);
	return (
		<>
			{showChildren ? (
				children
			) : (
				<WelcomeScreenView
					line1={line1}
					line2={line2}
				></WelcomeScreenView>
			)}
		</>
	);
}

function WelcomeScreenView({ line1, line2 }) {
	return (
		<MainContainer>
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<img
					alt=""
					height={"15%"}
					src={RenuvionTopLogo}
					style={{ marginTop: "5%" }}
				></img>
				<div
					style={{
						color: "white",
						flexGrow: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div style={{ color: "white", fontSize: "400%" }}>
						{line1}
					</div>
					<div style={{ color: "white", fontSize: "300%" }}>
						{line2}
					</div>
				</div>
				<img alt="" height={"20%"} src={RenuvionBottomLogo}></img>
			</div>
		</MainContainer>
	);
}

export default WelcomeScreen;
