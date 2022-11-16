import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/common/MainContainer";
import { Box, Title, Content } from "../styles/Card";
import { HorizontalLine, VerticalLine } from "../styles/Common";
import NoIcon from "../styles/Icons/No";
import YesIcon from "../styles/Icons/Yes";
import { TITLE_COLOR } from "../utils/Colors";
import NavBar from "../views/NavBar";

const leftDivStl = {
	width: "80%",
	height: "100%",
	display: "flex",
	alignItems: "center",
};

const containerStl = {
	width: "32%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const iconStl = {
	width: "20%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const rowStl = {
	height: "18%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

function RemoteServiceScreen() {
	const navigate = useNavigate();
	return (
		<MainContainer>
			<NavBar
				leftButtons={[
					{
						onClick: () => {
							navigate(-1);
						},
						icon: (
							<HiOutlineChevronLeft
								size="85%"
								color="white"
							></HiOutlineChevronLeft>
						),
					},
				]}
				title="Remote Connection"
				rightButtons={[
					{
						onClick: () => {},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<Box style={{height: "95%"}}>
				<Title color={TITLE_COLOR}>Remote Connection Details</Title>
				<Content
					style={{
						padding: "0.5rem",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div style={rowStl}>
						<div style={containerStl}>
							<div style={leftDivStl}>Network Connection</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>Signal Strength</div>
							<div style={iconStl}>0 %</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>Server Reachable</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
					</div>
					<HorizontalLine style={{ width: "100%" }}></HorizontalLine>
					<div style={rowStl}>
						<div style={containerStl}>
							<div style={leftDivStl}>
								MedShift Module Firmware Version
							</div>
							<div style={iconStl}>0.0.0</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>
								Display Board - Communication board connection
								status
							</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>
								Main Board - Communication board connection
								status
							</div>
							<div style={iconStl}>
								<YesIcon></YesIcon>
							</div>
						</div>
					</div>
					<HorizontalLine style={{ width: "100%" }}></HorizontalLine>
					<div style={rowStl}>
						<div style={containerStl}>
							<div style={leftDivStl}>SDCard presence</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>SDCard size</div>
							<div style={iconStl}>0 GB</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>SDCard free space</div>
							<div style={iconStl}>0 MB</div>
						</div>
					</div>
					<HorizontalLine style={{ width: "100%" }}></HorizontalLine>
					<div style={rowStl}>
						<div style={containerStl}>
							<div style={leftDivStl}>
								New Update(s) Available
							</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>
								Download Update Progress
							</div>
							<div style={iconStl}>0 %</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>Available Free space</div>
							<div style={iconStl}>0 %</div>
						</div>
					</div>
					<HorizontalLine style={{ width: "100%" }}></HorizontalLine>
					<div style={rowStl}>
						<div style={containerStl}>
							<div style={leftDivStl}>Battery presence</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>Battery charging</div>
							<div style={iconStl}>
								<NoIcon></NoIcon>
							</div>
						</div>
						<VerticalLine></VerticalLine>
						<div style={containerStl}>
							<div style={leftDivStl}>
								Battery state of charge
							</div>
							<div style={iconStl}>0 %</div>
						</div>
					</div>
				</Content>
			</Box>
		</MainContainer>
	);
}

export default RemoteServiceScreen;
