import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/common/MainContainer";
import NavBar from "../views/NavBar";
import { Box, Title, Content } from "../styles/Card";
import {
	HorizontalLine,
	IconButton,
	Trademark,
	VerticalLine,
} from "../styles/Common";
import { useRecoilState } from "recoil";
import { PresetTankData, TankVolume } from "../store/GeneratorSettings";
import PowerSetterComponent from "../components/PowerSetterComponent";
import styled from "styled-components";
import { COAG_COLOR, TITLE_COLOR } from "../utils/Colors";
import pencil from "../public/images/pencil.svg";
import { VIEWS } from "../utils/HelpViewUtils";
import bottle from "../public/images/Bottle.svg"

function GeneratorSettingsScreen() {
	const navigate = useNavigate();
	const [tank, setTank] = useRecoilState(TankVolume);
	const [modalProps, setModalProps] = useState();

	const apply = () => {
		navigate(-1);
	};

	return (
		<MainContainer>
			{modalProps && (
				<PowerSetterComponent {...modalProps}></PowerSetterComponent>
			)}
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
				title="Generator Settings"
				rightButtons={[
					{
						onClick: () => {
							navigate("/help", {
								state: { view: VIEWS.GENERATOR_SETINGS },
							});
						},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<Box style={{ height: "60%" }}>
				<Title color={TITLE_COLOR}>Helium Gas</Title>
				<Content>
					<Title color={COAG_COLOR}>
						<div
							style={{
								width: "100%",
								height: "100%",
								display: "flex",
								flexDirection: "row",
							}}
						>
							<div
								style={{
									width: "49%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<div
									style={{
										width: "55%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									Current Status
								</div>
								<VerticalLine></VerticalLine>
								<div
									style={{
										width: "43%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									Tank Data
								</div>
							</div>
							<VerticalLine></VerticalLine>
							<div
								style={{
									width: "49%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								Preset Tank Data
							</div>
						</div>
					</Title>
					<Content
						style={{ display: "flex", flexDirection: "column" }}
					>
						<div style={{ flexGrow: 1 }}>
							<div
								style={{
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "row",
								}}
							>
								<div
									style={{
										width: "49%",
										display: "flex",
										alignItems: "start",
										justifyContent: "center",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											width: "100%",
										}}
									>
										<div
											style={{
												width: "55%",
												paddingTop: "2rem",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<div
												style={{
													width: "20%",
													display: "flex",
									alignItems: "center",
									justifyContent: "center",
												}}
											><img alt="" src={bottle}></img></div>
											<div
												style={{
													width: "80%",
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													justifyContent: "center",
													color: "#6698ff",
												}}
											>
												<div>Tank Pressure</div>
												<div
													style={{
														marginBottom: "0.5rem",
													}}
												>
													- bar/ - psi
												</div>
												<HorizontalLine bg="#6698ff"></HorizontalLine>
												<div
													style={{
														marginTop: "0.5rem",
													}}
												>
													Input Pressure
												</div>
												<div>0.00 bar/ 0 psi</div>
											</div>
										</div>
										<div
											style={{
												paddingTop: "1.5rem",
												width: "2%",
											}}
										>
											<VerticalLine
												style={{ height: "110%" }}
											></VerticalLine>
										</div>
										<div
											style={{
												width: "43%",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												paddingTop: "2rem",
											}}
										>
											<div>Tank Volume</div>
											<div
												style={{
													position: "relative",
													display: "flex",
													width: "6rem",
													justifyContent: "end",
													alignItems: "center",
													marginBottom: "0.5rem",
												}}
												onClick={() => {
													setModalProps({
														title: "Helium Gas Tank",
														color: COAG_COLOR,
														value: tank.volume,
														setValue: (volume) => {
															if (volume < 0.1)
																volume = 0.1;
															setTank((prev) => {
																return {
																	...prev,
																	volume,
																};
															});
															setModalProps(null);
														},
														range: {
															min: 0,
															max: 99.9,
														},
														isFloat: true,
														units: "Litre",
														subtitle: "Volume",
													});
													setTank({
														...tank,
														preset: null,
													});
												}}
											>
												<img
													alt=""
													style={{
														position: "absolute",
														left: "0.3rem",
													}}
													height="60%"
													width="auto"
													src={pencil}
												></img>
												<div>
													{PresetTankData.UNKNOWN
														.label ===
													tank.preset?.label
														? "-"
														: `${tank.volume} L`}
												</div>
											</div>
											<HorizontalLine bg="white"></HorizontalLine>
											<div
												style={{ marginTop: "0.5rem" }}
											>
												Max. Pressure
											</div>
											<div
												style={{
													position: "relative",
													display: "flex",
													width: "6rem",
													justifyContent: "end",
													alignItems: "center",
												}}
												onClick={() => {
													setModalProps({
														title: "Helium Gas Tank",
														color: COAG_COLOR,
														value: tank.pressure,
														setValue: (
															pressure
														) => {
															setTank((prev) => {
																return {
																	...prev,
																	pressure,
																};
															});
															setModalProps(null);
														},
														range: {
															min: 0,
															max: 200,
														},
														isFloat: false,
														units: "bar",
														subtitle:
															"Maximum Pressure",
													});
													setTank({
														...tank,
														preset: null,
													});
												}}
											>
												<img
													alt=""
													style={{
														position: "absolute",
														left: "0.3rem",
													}}
													height="60%"
													width="auto"
													src={pencil}
												></img>
												{tank.pressure}
											</div>
										</div>
									</div>
								</div>
								<VerticalLine></VerticalLine>
								<div
									style={{
										width: "49%",
									}}
								>
									<EnumRow>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.L10
														.volume,
													preset: PresetTankData.L10,
													pressure:
														PresetTankData.L10
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.L10.label
											}
										>
											{PresetTankData.L10.label}
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.M312
														.volume,
													preset: PresetTankData.M312,
													pressure:
														PresetTankData.M312
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.M312.label
											}
										>
											{PresetTankData.M312.label}
											<Trademark>3</Trademark>
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.FT20
														.volume,
													preset: PresetTankData.FT20,
													pressure:
														PresetTankData.FT20
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.FT20.label
											}
										>
											{PresetTankData.FT20.label}
											<Trademark>3</Trademark>
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.L20
														.volume,
													preset: PresetTankData.L20,
													pressure:
														PresetTankData.L20
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.L20.label
											}
										>
											{PresetTankData.L20.label}
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.M317
														.volume,
													preset: PresetTankData.M317,
													pressure:
														PresetTankData.M317
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.M317.label
											}
										>
											{PresetTankData.M317.label}
											<Trademark>3</Trademark>
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.FT40
														.volume,
													preset: PresetTankData.FT40,
													pressure:
														PresetTankData.FT40
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.FT40.label
											}
										>
											{PresetTankData.FT40.label}
											<Trademark>3</Trademark>
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.M31
														.volume,
													preset: PresetTankData.M31,
													pressure:
														PresetTankData.M31
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.M31.label
											}
										>
											{PresetTankData.M31.label}
											<Trademark>3</Trademark>
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.M32
														.volume,
													preset: PresetTankData.M32,
													pressure:
														PresetTankData.M32
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.M32.label
											}
										>
											{PresetTankData.M32.label}
											<Trademark>3</Trademark>
										</Enum>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData.FT60
														.volume,
													preset: PresetTankData.FT60,
													pressure:
														PresetTankData.FT60
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.FT60.label
											}
										>
											{PresetTankData.FT60.label}
											<Trademark>3</Trademark>
										</Enum>
										<div></div>
										<Enum
											onClick={() =>
												setTank({
													...tank,
													volume: PresetTankData
														.UNKNOWN.volume,
													preset: PresetTankData.UNKNOWN,
													pressure:
														PresetTankData.UNKNOWN
															.pressure,
												})
											}
											isSelected={
												tank.preset?.label ===
												PresetTankData.UNKNOWN.label
											}
										>
											{PresetTankData.UNKNOWN.label}
										</Enum>
										<div></div>
									</EnumRow>
								</div>
							</div>
						</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								height: "3rem",
								color: "#6698ff",
							}}
						>
							Estimate Gas Tank Time Left: - min
						</div>
					</Content>
				</Content>
			</Box>
			<div
				style={{
					height: "35%",
					display: "flex",
					justifyContent: "end",
				}}
			>
				<IconButton
					style={{
						height: "20%",
						width: "20%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						justifySelf: "center",
						marginRight: "10%",
					}}
					color={COAG_COLOR}
					onClick={apply}
				>
					APPLY
				</IconButton>
			</div>
		</MainContainer>
	);
}

const EnumRow = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: auto auto auto;
	gap: 1rem;
	padding: 1rem;
`;

const Enum = styled.div`
	background-color: rgb(23, 34, 56);
	border: ${({ isSelected }) =>
		isSelected ? `solid 3px white` : " solid 3px transparent"};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	color: ${({ isSelected }) => (isSelected ? "white" : "gray")};
	cursor: pointer;
	height: 2rem;
	width: 6rem;
`;

export default GeneratorSettingsScreen;
