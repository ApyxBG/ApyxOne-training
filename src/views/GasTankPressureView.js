import React from "react";
import styled from "styled-components";

function GasTankPressureView() {
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
				Gas Tank Pressure
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ width: "98%" }}>
					<Box>
						<Title>Gas Tank Pressure</Title>
						<Content
							style={{
								justifyContent: "start",
								paddingLeft: "0.5rem",
							}}
						>
							Tank High Pressure: - bar/ - psi
							<br />
							Gas System Input Pressure: 0.00 bar/ 0psi
							<br />
							Estimated gas tank time: - min
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

export default GasTankPressureView;
