import React from "react";
import useClock from "../controllers/useClock";
import styled from "styled-components";
import { VerticalLine } from "../styles/Common";

function GeneratorStatusView() {
	const time = useClock();
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
				Generator Status
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ width: "37%" }}>
					<Box>
						<Title>Serial #</Title>
						<Content>AO5121003</Content>
					</Box>
					<Box>
						<Title>Catalog #</Title>
						<Content>APYX-ONE</Content>
					</Box>
					<Box>
						<Title>GMT</Title>
						<Content>{format(time.toUTCString())}</Content>
					</Box>
				</div>
				<div style={{ width: "60%", marginLeft: "0.5rem" }}>
					<Box>
						<Title>Software/Firmware Version</Title>
						<Content
							style={{
								justifyContent: "start",
								paddingLeft: "0.5rem",
							}}
						>
							T 0.0.8
							<br />- Display MCU V1.0-125
							<br />- Communication MCU V255.255-255
							<br />- Main FPGA V0.0
							<br />- Gas System FPGA V0.0
							<br />- Relay System FPGA V0.0
						</Content>
					</Box>
					<Box>
						<Title>Last displayed Error/Fault</Title>
						<Content>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
								}}
							>
								<div
									style={{
										width: "49%",
										display: "flex",
										justifyContent: "center",
									}}
								>
									E8
								</div>
								<VerticalLine bg="rgb(39,50,78)"></VerticalLine>
								<div
									style={{
										width: "49%",
										display: "flex",
										justifyContent: "center",
									}}
								>
									F27
								</div>
							</div>
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
	font-family: OpenSans-Semibold;
	font-size: 90%;
    
	:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`;

const format = (str) => {
	let arr = str.split(" ");
	return `${arr[4]}, ${arr[1]} ${arr[2]} ${arr[3]}`;
};

export default GeneratorStatusView;
