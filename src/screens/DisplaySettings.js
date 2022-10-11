import React, { useState } from "react";
import MainContainer from "../components/common/MainContainer";
import { useNavigate } from "react-router-dom";
import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import NavBar from "../views/NavBar";
import { Box, Title, Content } from "../styles/Card";
import { IconButton, Slider } from "../styles/Common";
import Enum from "../styles/Enum";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Line1, Line2 } from "../store/WelcomeScreen";
import { TITLE_COLOR, COAG_COLOR } from "../utils/Colors";
import pencil from "../public/images/pencil.svg";

function DisplaySettings() {
	const navigate = useNavigate();
	const [line1, setLine1] = useRecoilState(Line1);
	const [line2, setLine2] = useRecoilState(Line2);
	const apply = () => {
		setLine1(wcMsg1);
		setLine2(wcMsg2);
		navigate(-1);
	};
	const [wcMsg1, setWcMsg1] = useState(line1);
	const [wcMsg2, setWcMsg2] = useState(line2);

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
				title="Display Settings"
				rightButtons={[
					{
						onClick: () => {},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					paddingLeft: "2rem",
					paddingRight: "2rem",
					height: "95%",
				}}
			>
				<div
					style={{
						height: "100%",
						width: "50%",
						paddingRight: "1rem",
					}}
				>
					<Box style={{ height: "100%" }}>
						<Title color={TITLE_COLOR}>Language</Title>
						<Content
							style={{
								justifyContent: "center",
								display: "flex",
								padding: "1.5rem",
							}}
						>
							<div
								className="d-flex flex-column"
								style={{ width: "70%", gap: ".7rem" }}
							>
								<Enum.Wrapper
									isSelected={true}
									color={COAG_COLOR}
								>
									<Enum.Text>ENGLISH</Enum.Text>
								</Enum.Wrapper>
							</div>
						</Content>
					</Box>
				</div>
				<div
					style={{
						height: "100%",
						width: "50%",
						paddingLeft: "1rem",
					}}
				>
					<Box style={{ height: "25%", marginBottom: "5%" }}>
						<Title color={TITLE_COLOR}>Brightness</Title>
						<Content>
							<MySlider defaultValue={50}></MySlider>
						</Content>
					</Box>
					<Box style={{ height: "25%", marginBottom: "5%" }}>
						<Title color={TITLE_COLOR}>Audio</Title>
						<Content>
							<MySlider defaultValue={50}></MySlider>
						</Content>
					</Box>
					<Box style={{ height: "25%", marginBottom: "5%" }}>
						<Title
							style={{ position: "relative" }}
							color={TITLE_COLOR}
						>
							<img
								alt=""
								style={{ position: "absolute", left: "0.3rem" }}
								height="60%"
								width="auto"
								src={pencil}
							></img>
							Welcome Messge
						</Title>
						<Content
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								style={{
									width: "100%",
									height: "40%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<WellcomeMsg
									value={wcMsg1}
									onChange={(e) => setWcMsg1(e.target.value)}
									placeholder="Welcome Line 1"
								></WellcomeMsg>
							</div>
							<div
								style={{
									width: "100%",
									height: "40%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									fontSize: "90%",
								}}
							>
								<WellcomeMsg
									value={wcMsg2}
									onChange={(e) => setWcMsg2(e.target.value)}
									placeholder="Welcome Message Line 2"
								></WellcomeMsg>
							</div>
						</Content>
					</Box>
					<div
						style={{
							height: "15%",
							display: "flex",
							justifyContent: "center",
							alignItems: "end",
						}}
					>
						<IconButton
							style={{
								height: "60%",
								width: "50%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignSelf: "center",
								justifySelf: "center",
							}}
							color={COAG_COLOR}
							onClick={apply}
						>
							APPLY
						</IconButton>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

const MySlider = ({ defaultValue }) => {
	const [value, setValue] = useState(defaultValue);
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
			}}
		>
			<span>min</span>
			<Slider
				min={0}
				max={100}
				val={value}
				className="unit-slider"
				color={COAG_COLOR}
			>
				<input
					type="range"
					min={0}
					max={100}
					value={value}
					onChange={(event) => {
						setValue(parseInt(event.target.value));
					}}
				></input>
			</Slider>
			<span>max</span>
		</div>
	);
};

const WellcomeMsg = styled.input`
	background-color: transparent;
	border: none;
	text-align: center;
	color: white;

	::placeholder {
		color: rgb(64, 90, 147);
	}

	&.active {
		border: none;
	}
`;

export default DisplaySettings;
