import React from "react";
import styled from "styled-components";
import { VerticalLine } from "../styles/Common";

function NEMView() {
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
				NEM/Auto-Bipolar Impedance
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ width: "98%" }}>
					<Box>
						<Title>Monopolar 1 Inserted</Title>
						<Content style={{ padding: "0.5rem" }}>
							<div
								style={{
									border: "0.2rem solid rgb(63, 90, 147)",
									width: "95%",
									borderRadius: "0.5rem",
									overflow: "hidden",
								}}
							>
								<div
									style={{
										borderBottom:
											"0.2rem solid rgb(63, 90, 147)",
										display: "flex",
									}}
								>
									<InnerBox>Range</InnerBox>
									<div style={{ display: "flex" }}>
										<VerticalLine bg="rgb(63, 90, 147)"></VerticalLine>
									</div>
									<InnerBox>Start</InnerBox>
									<div style={{ display: "flex" }}>
										<VerticalLine bg="rgb(63, 90, 147)"></VerticalLine>
									</div>
									<InnerBox>Measured</InnerBox>
									<div style={{ display: "flex" }}>
										<VerticalLine bg="rgb(63, 90, 147)"></VerticalLine>
									</div>
									<InnerBox>MAX</InnerBox>
								</div>
								<div style={{ display: "flex" }}>
									<InnerBox>8 - 135</InnerBox>
									<div style={{ display: "flex" }}>
										<VerticalLine bg="rgb(63, 90, 147)"></VerticalLine>
									</div>
									<InnerBox>-</InnerBox>
									<div style={{ display: "flex" }}>
										<VerticalLine bg="rgb(63, 90, 147)"></VerticalLine>
									</div>
									<InnerBox>-</InnerBox>
									<div style={{ display: "flex" }}>
										<VerticalLine bg="rgb(63, 90, 147)"></VerticalLine>
									</div>
									<InnerBox>-</InnerBox>
								</div>
							</div>
						</Content>
					</Box>
					<Box>
						<Title>Auto-Bipolar Impedance</Title>
						<Content>0 Ohm</Content>
					</Box>
				</div>
			</div>
		</div>
	);
}

const InnerBox = styled.div`
	width: 24%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

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

export default NEMView;
