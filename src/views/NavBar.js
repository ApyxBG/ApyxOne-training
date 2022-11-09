import React from "react";
import NavBarButton from "../components/common/NavBarButton";
import { NRG_COLOR } from "../utils/Colors";
import styleConstants from "../utils/StyleConstance.json";
import pen from "../public/images/pen.svg";
import WTF from "../styles/Icons/WTF";

function NavBar({
	leftButtons,
	title,
	rightButtons,
	textAbove,
	textAboveColor,
}) {
	return (
		<>
			<div
				style={{
					width: "100%",
					color: textAbove
						? textAboveColor
							? textAboveColor
							: "white"
						: styleConstants.mainBgColor,
					textAlign: "center",
					height: "1.5rem",
					position: "relative",
					fontWeight: "bold",
				}}
			>
				{textAbove ? textAbove : ""}
				<div
					style={{
						position: "absolute",
						right: "0px",
						top: "0px",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "8rem",
					}}
				>
					<div
						style={{
							height: "80%",
							border: `solid 0.1rem ${NRG_COLOR}`,
							width: "5.5rem",
							borderRadius: "0.5rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							paddingLeft: "0.3rem",
							paddingRight: "0.3rem",
						}}
					>
						<img alt="" height="80%" width="auto" src={pen}></img>
						<div
							style={{
								color: "white",
								fontWeight: "normal",
								fontSize: "90%",
							}}
						>
							--:-- h
						</div>
					</div>
					<WTF width="1.5rem" height="0.9rem"></WTF>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					color: "white",
					marginBottom: "0.5rem",
					position: "relative",
				}}
			>
				<div className="d-flex gap-2">
					{leftButtons?.map((button, idx) => {
						return (
							<NavBarButton
								key={`leftnavbutton${idx}`}
								onClick={button.onClick}
								icon={button.icon}
							></NavBarButton>
						);
					})}
				</div>
				<div
					style={{
						position: "absolute",
						fontSize: "120%",
						left: "50%",
						top: "50%",
						transform: "translate(-50%,-50%)",
						fontFamily: "OpenSans-Semibold"
					}}
				>
					{title}
				</div>
				<div className="d-flex gap-2">
					{rightButtons?.map((button, idx) => {
						return (
							<NavBarButton
								key={`rightnavbutton${idx}`}
								onClick={button.onClick}
								icon={button.icon}
							></NavBarButton>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default NavBar;
