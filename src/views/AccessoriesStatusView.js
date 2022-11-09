import React from "react";
import styled from "styled-components";

function AccessoriesStatusView() {
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
				Accessories Connection Status
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ width: "47%" }}>
					<Box>
						<Title>Monopolar 1 Inserted</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
					</Box>
					<Box>
						<Title>Monopolar 2 Inserted</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
                    </Box>
                    <Box>
						<Title>Bipolar Inserted</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
					</Box>
				</div>
				<div style={{ width: "47%", marginLeft: "0.5rem" }}>
					<Box>
						<Title>Plasma Inserted</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
					</Box><Box>
						<Title>NEM</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
					</Box><Box>
						<Title>Foot Control Inserted</Title>
						<Content><div style={{color: "red"}}>NO</div></Content>
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
	font-family: OpenSans-Semibold;
	font-size: 90%;
    
	:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`;

export default AccessoriesStatusView;
