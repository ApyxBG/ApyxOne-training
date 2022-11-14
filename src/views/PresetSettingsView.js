import React from "react";
import styled from "styled-components";
import useMonopolarController from "../controllers/useMonopolarController";
import {
	Box,
	Content as MainContent,
	Title as MainTitle,
} from "../styles/Card";
import {
	allCoagModes,
	allCutModes,
	getCoagMode,
	getCutMode,
} from "../utils/MonopolarEnums";
import { VerticalLine } from "../styles/Common";
import ToggleButton from "../views/ToggleButton";
import ModeSetterComponent from "../components/ModeSetterComponent";
import useBipolarController from "../controllers/useBipolarController";
import { allModes, getMode } from "../utils/BipolarEnums";
import useHeliumController from "../controllers/useHeliumController";
import PowerSetterComponent from "../components/PowerSetterComponent";
import useEnergyController from "../controllers/useEnergyController";
import usePulsingController from "../controllers/usePulsingController";
import {
	TITLE_COLOR,
	CUT_COLOR,
	COAG_COLOR,
	NRG_COLOR,
	NRG_TITLE_COLOR,
	LABEL_DISABLED,
} from "../utils/Colors";
import IconButton from "../components/common/IconButton";

function PresetSettingsView({ preset, setPreset }) {
	const monopolar1Controller = useMonopolarController(
		preset.monopolar1,
		(monopolar) => {
			if (setPreset) setPreset({ ...preset, monopolar1: monopolar });
		}
	);
	const monopolar2Controller = useMonopolarController(
		preset.monopolar2,
		(monopolar) => {
			if (setPreset) setPreset({ ...preset, monopolar2: monopolar });
		}
	);
	const bipolarController = useBipolarController(
		preset.bipolar,
		(bipolar) => {
			if (setPreset) setPreset({ ...preset, bipolar });
		}
	);
	const heliumController = useHeliumController(preset.helium, (helium) => {
		if (setPreset) setPreset({ ...preset, helium });
	});
	const energyController = useEnergyController(preset.energy, (energy) => {
		if (setPreset) setPreset({ ...preset, energy });
	});
	const pulsingController = usePulsingController(
		preset.pulsing,
		(pulsing) => {
			if (setPreset) setPreset({ ...preset, pulsing });
		}
	);

	return (
		<Box>
			{setPreset && <MainTitle color={TITLE_COLOR}>Settings</MainTitle>}
			<MainContent>
				{setPreset && monopolar1Controller.showCutModal && (
					<ModeSetterComponent
						title="Monopolar 1"
						obj={monopolar1Controller.cut}
						setObj={monopolar1Controller.setCut}
						color={CUT_COLOR}
						enumValues={allCutModes}
						getModeEnum={getCutMode}
						modeTitle="Cut Mode"
					></ModeSetterComponent>
				)}
				{setPreset && monopolar1Controller.showCoagModal && (
					<ModeSetterComponent
						title="Monopolar 1"
						obj={monopolar1Controller.coag}
						setObj={monopolar1Controller.setCoag}
						color={COAG_COLOR}
						enumValues={allCoagModes}
						getModeEnum={getCoagMode}
						modeTitle="Coag Mode"
					></ModeSetterComponent>
				)}
				{setPreset && monopolar2Controller.showCutModal && (
					<ModeSetterComponent
						title="Monopolar 2"
						obj={monopolar2Controller.cut}
						setObj={monopolar2Controller.setCut}
						color={CUT_COLOR}
						enumValues={allCutModes}
						getModeEnum={getCutMode}
						modeTitle="Cut Mode"
					></ModeSetterComponent>
				)}
				{setPreset && monopolar2Controller.showCoagModal && (
					<ModeSetterComponent
						title="Monopolar 2"
						obj={monopolar2Controller.coag}
						setObj={monopolar2Controller.setCoag}
						color={COAG_COLOR}
						enumValues={allCoagModes}
						getModeEnum={getCoagMode}
						modeTitle="Coag Mode"
					></ModeSetterComponent>
				)}
				{setPreset && bipolarController.showModal && (
					<ModeSetterComponent
						title="Bipolar"
						color={COAG_COLOR}
						enumValues={allModes}
						getModeEnum={getMode}
						obj={bipolarController.bipolar}
						setObj={bipolarController.setBipolar}
					></ModeSetterComponent>
				)}
				{setPreset && heliumController.showCoagModal && (
					<ModeSetterComponent
						title={heliumController.coolCoagTitle}
						obj={heliumController.coag}
						setObj={heliumController.setCoolCoag}
						color={COAG_COLOR}
						enumValues={allCoagModes}
						getModeEnum={getCoagMode}
						modeTitle="Coag Mode"
					></ModeSetterComponent>
				)}
				{setPreset && heliumController.showRenuvionModal && (
					<PowerSetterComponent
						color={NRG_COLOR}
						titleColor={NRG_TITLE_COLOR}
						value={heliumController.renuvion}
						setValue={heliumController.setRenuvion}
						isFloat={false}
						range={{ min: 0, max: 100 }}
						title="Renuvion Plasma"
						subtitle="Power"
						units="%"
					></PowerSetterComponent>
				)}
				{setPreset && heliumController.showFlowModal && (
					<PowerSetterComponent
						color={NRG_COLOR}
						titleColor={NRG_TITLE_COLOR}
						value={heliumController.heliumFlow}
						setValue={heliumController.setHeliumFlow}
						isFloat={true}
						range={{ min: 0, max: 5 }}
						sliderRange={{ min: 0.1, max: 5 }}
						title="Helium Gas Flow"
						subtitle="Gas Flow"
						units="l/min"
					></PowerSetterComponent>
				)}
				{setPreset && energyController.showLimitModal && (
					<PowerSetterComponent
						color={NRG_COLOR}
						titleColor={NRG_TITLE_COLOR}
						value={energyController.limit.value}
						setValue={energyController.setLimit}
						isFloat={true}
						range={{ min: 0, max: 10 }}
						sliderRange={{ min: 0.1, max: 10 }}
						title="Energy Counter"
						subTitle="Total Energy"
						units="kJ"
					></PowerSetterComponent>
				)}
				{setPreset && pulsingController.showOnTimeModal && (
					<PowerSetterComponent
						color={NRG_COLOR}
						titleColor={NRG_TITLE_COLOR}
						value={pulsingController.onTime}
						setValue={pulsingController.setOnTime}
						isFloat={false}
						range={pulsingController.range}
						title="Pulsing On Time"
						subTitle="On Time"
						units="ms"
					></PowerSetterComponent>
				)}
				{setPreset && pulsingController.showOffTimeModal && (
					<PowerSetterComponent
						color={NRG_COLOR}
						titleColor={NRG_TITLE_COLOR}
						value={pulsingController.offTime}
						setValue={pulsingController.setOffTime}
						isFloat={false}
						range={pulsingController.range}
						title="Pulsing Off Time"
						subTitle="Off Time"
						units="ms"
					></PowerSetterComponent>
				)}
				<div
					style={{
						height: "100%",
						display: "flex",
						flexDirection: "row",
					}}
				>
					<div
						style={{
							height: "100%",
							width: "50%",
							display: "flex",
							flexDirection: "column",
							padding: "0.2rem",
							marginTop: "1.5rem",
						}}
					>
						<Card>
							<Title>Monopolar 1</Title>
							<Content>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "column",
										padding: "0.5rem",
									}}
									onClick={() =>
										monopolar1Controller.onShowCutModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											style={{
												boxShadow: "none",
												width: "100%",
												minWidth: "unset",
												display: "flex",
												justifyContent: "space-around"
											}}
											color="inherit"
											iconColor={CUT_COLOR}
											icon={
												getCutMode(
													monopolar1Controller.cut
														.mode
												).icon
											}
											label={
												getCutMode(
													monopolar1Controller.cut
														.mode
												).label
											}
											iconWidth="0.9rem"
											iconHeight="0.8rem"
										></IconButton>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "end",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{monopolar1Controller.cut.power}
										</span>
										<span>w</span>
									</div>
								</div>
								<VerticalLine></VerticalLine>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "column",
										padding: "0.2rem",
									}}
									onClick={() =>
										monopolar1Controller.onShowCoagModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											style={{
												boxShadow: "none",
												width: "100%",
												minWidth: "unset",
												display: "flex",
												justifyContent: "space-around"
											}}
											color="inherit"
											iconColor={COAG_COLOR}
											icon={
												getCoagMode(
													monopolar1Controller.coag
														.mode
												).icon
											}
											label={
												getCoagMode(
													monopolar1Controller.coag
														.mode
												).label
											}
											iconWidth="0.9rem"
											iconHeight="0.8rem"
										></IconButton>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "end",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{monopolar1Controller.coag.power}
										</span>
										<span>w</span>
									</div>
								</div>
							</Content>
						</Card>
						<Card>
							<Title>Monopolar 2</Title>
							<Content>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "column",
										padding: "0.5rem",
									}}
									onClick={() =>
										monopolar2Controller.onShowCutModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											style={{
												boxShadow: "none",
												width: "100%",
												minWidth: "unset",
												display: "flex",
												justifyContent: "space-around"
											}}
											color="inherit"
											iconColor={CUT_COLOR}
											icon={
												getCutMode(
													monopolar2Controller.cut
														.mode
												).icon
											}
											label={
												getCutMode(
													monopolar2Controller.cut
														.mode
												).label
											}
											iconWidth="0.9rem"
											iconHeight="0.8rem"
										></IconButton>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "end",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{monopolar2Controller.cut.power}
										</span>
										<span>w</span>
									</div>
								</div>
								<VerticalLine></VerticalLine>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "column",
										padding: "0.2rem",
									}}
									onClick={() =>
										monopolar2Controller.onShowCoagModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											style={{
												boxShadow: "none",
												width: "100%",
												minWidth: "unset",
												display: "flex",
												justifyContent: "space-around"
											}}
											color="inherit"
											iconColor={COAG_COLOR}
											icon={
												getCoagMode(
													monopolar2Controller.coag
														.mode
												).icon
											}
											label={
												getCoagMode(
													monopolar2Controller.coag
														.mode
												).label
											}
											iconWidth="0.9rem"
											iconHeight="0.8rem"
										></IconButton>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "end",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{monopolar2Controller.coag.power}
										</span>
										<span>w</span>
									</div>
								</div>
							</Content>
						</Card>
						<Card>
							<Title>Bipolar</Title>
							<Content>
								<div
									style={{
										width: "100%",
										display: "flex",
										flexDirection: "column",
										padding: "0.5rem",
									}}
									onClick={() =>
										bipolarController.onShowModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											style={{
												boxShadow: "none",
												width: "50%",
												minWidth: "unset",
											}}
											color="inherit"
											iconColor={COAG_COLOR}
											icon={
												getMode(
													bipolarController.bipolar
														.mode
												).icon
											}
											label={
												getMode(
													bipolarController.bipolar
														.mode
												).label
											}
											iconWidth="0.9rem"
											iconHeight="0.8rem"
										></IconButton>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{bipolarController.bipolar.power}
										</span>
										<span>w</span>
									</div>
								</div>
							</Content>
						</Card>
					</div>
					<div
						style={{
							height: "100%",
							width: "50%",
							display: "flex",
							flexDirection: "column",
							padding: "0.2rem",
							marginTop: "1.5rem",
						}}
					>
						<Card>
							<Title>
								<div
									style={{
										width: "50%",
									}}
								>
									Plasma
								</div>
								<div
									style={{
										width: "50%",
									}}
								>
									Cool-Coag
								</div>
							</Title>
							<Content>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "column",
										padding: "0.5rem",
									}}
									onClick={() =>
										heliumController.onShowRenuvionModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											color: NRG_COLOR,
										}}
									>
										POWER
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "end",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{heliumController.renuvion}
										</span>
										<span>%</span>
									</div>
								</div>
								<VerticalLine></VerticalLine>
								<div
									style={{
										width: "50%",
										display: "flex",
										flexDirection: "column",
										padding: "0.2rem",
									}}
									onClick={() =>
										heliumController.onShowCoagModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											style={{
												boxShadow: "none",
												width: "100%",
												minWidth: "unset",
												display: "flex",
												justifyContent: "space-around"
											}}
											color="inherit"
											iconColor={COAG_COLOR}
											icon={
												getCoagMode(
													heliumController.coag.mode
												).icon
											}
											label={
												getCoagMode(
													heliumController.coag.mode
												).label
											}
											iconWidth="0.9rem"
											iconHeight="0.8rem"
										></IconButton>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "end",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{heliumController.coag.power}
										</span>
										<span>w</span>
									</div>
								</div>
							</Content>
						</Card>
						<Card>
							<Title>Hellium Gas Flow</Title>
							<Content>
								<div
									style={{
										width: "100%",
										display: "flex",
										flexDirection: "column",
									}}
									onClick={() =>
										heliumController.onShowFlowModal()
									}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "baseline",
										}}
									>
										<span
											style={{ fontSize: "1.6rem" }}
											className="me-1"
										>
											{`${Math.floor(
												heliumController.heliumFlow
											)}.${
												(heliumController.heliumFlow *
													10) %
												10
											}`}
										</span>
										<span>l/min</span>
									</div>
								</div>
							</Content>
						</Card>
						<Card>
							<div
								style={{
									width: "100%",
									display: "flex",
									flexDirection: "row",
									height: "100%",
									padding: "0.2rem",
								}}
							>
								<ToggleButton
									checked={energyController.counter.enabled}
									onClick={
										energyController.switchCounterEnabled
									}
								></ToggleButton>
								<div
									style={{
										marginLeft: "0.5rem",
										fontSize: "0.6rem",
										height: "100%",
										justifyContent: "center",
										color: energyController.counter.enabled
											? "white"
											: LABEL_DISABLED,
									}}
									className="d-flex flex-column"
								>
									Energy Counter
								</div>
							</div>
						</Card>
						<Card>
							<div
								style={{
									width: "100%",
									display: "flex",
									flexDirection: "row",
									height: "100%",
									padding: "0.2rem",
									color: energyController.limit.enabled
										? "white"
										: LABEL_DISABLED,
								}}
							>
								<ToggleButton
									checked={energyController.limit.enabled}
									onClick={
										energyController.switchLimitEnabled
									}
								></ToggleButton>
								<div
									style={{
										fontSize: "0.6rem",
										marginLeft: "0.5rem",
									}}
									className="d-flex flex-column "
								>
									<span className="">Energy</span>
									<span className="">Limit</span>
								</div>
								<div
									onClick={energyController.onShowLimitModal}
									style={{
										alignSelf: "center",
										flexGrow: 1,
										textAlign: "center",
										justifyContent: "center",
									}}
								>
									<div style={{ display: "inline-block" }}>
										{`${Math.floor(
											energyController.limit.value
										)}.${
											(energyController.limit.value *
												10) %
											10
										}`}
									</div>
									<div style={{ display: "inline-block" }}>
										kJ
									</div>
								</div>
							</div>
						</Card>
						<Card>
							<div
								style={{
									width: "100%",
									display: "flex",
									flexDirection: "row",
									height: "100%",
									padding: "0.2rem",
									alignItems: "center",
									color: pulsingController.enabled
										? "white"
										: LABEL_DISABLED,
								}}
							>
								<ToggleButton
									checked={pulsingController.enabled}
									onClick={pulsingController.switchEnabled}
								></ToggleButton>
								<div
									style={{
										fontSize: "0.6rem",
										marginLeft: "0.5rem",
										justifyContent: "center",
									}}
									className="d-flex flex-column "
								>
									Pulsing
								</div>
								<div
									style={{
										alignSelf: "center",
										flexGrow: 1,
										textAlign: "center",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<div
										onClick={
											pulsingController.onShowOnTimeModal
										}
									>
										<span style={{ fontSize: "0.6rem" }}>
											ON
										</span>
										<span>{` ${pulsingController.onTime} `}</span>
										<span style={{ fontSize: "0.6rem" }}>
											ms
										</span>
									</div>
									<div
										onClick={
											pulsingController.onShowOffTimeModal
										}
									>
										<span style={{ fontSize: "0.6rem" }}>
											OFF
										</span>
										<span>{` ${pulsingController.offTime} `}</span>
										<span style={{ fontSize: "0.6rem" }}>
											ms
										</span>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</MainContent>
		</Box>
	);
}

const Card = styled.div`
	border: 0.2rem solid rgb(23, 34, 56);
	margin-bottom: 0.2rem;
	border-radius: 15px;
`;

const Title = styled.div`
	width: 100%;
	height: 1rem;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 0.2rem solid rgb(23, 34, 56);
	font-size: 0.7rem;
`;

const Content = styled.div`
	height: calc(100% - 1rem);
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 0.7rem;
`;

export default PresetSettingsView;
