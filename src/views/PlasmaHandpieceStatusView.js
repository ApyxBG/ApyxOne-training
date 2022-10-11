import React from "react";
import styled from "styled-components";

function PlasmaHandpieceStatusView() {
	return (
		<div>
			<div
				style={{
					height: "4rem",
					display: "flex",
					justifydiv: "start",
					alignItems: "center",
					fontSize: "130%",
				}}
			>
				Plasma Handpiece Status
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ width: "37%" }}>
					<Box>
						<Title>Handpiece Inserted</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
					</Box>
					<Box>
						<Title>Estimated time left</Title>
						<Content>--:-- h</Content>
					</Box>
				</div>
				<div style={{ width: "60%", marginLeft: "0.5rem" }}>
					<Box>
						<Title>Handpiece first used (date/time)</Title>
						<Content
						>-
						</Content>
					</Box>
					<Box>
						<Title>Power Limits</Title>
						<Content>
							MIN: 0 % - MAX: 100 %
						</Content>
                    </Box>
                    <Box>
						<Title>Helium Gas Flow Limits</Title>
						<Content>
							MIN: 0.1 l/min - MAX: 5.0 l/min
						</Content>
					</Box>
				</div>
			</div>
		</div>
	);
}

const Title = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(63, 90, 147);
`;

const Content = styled.div`
	background-color: rgb(23, 34, 56);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.2rem;
`;

const Box = styled.div`
	display: inline-block;
	background-color: rgb(39, 50, 78);
	border-radius: 15px;
	width: 100%;
	overflow: hidden;
	color: white;
	font-family: OpenSans-SemiBold;
	font-size: 90%;
    
	:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`;

export default PlasmaHandpieceStatusView;
