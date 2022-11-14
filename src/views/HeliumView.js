import React from "react";
import ModeSetterComponent from "../components/ModeSetterComponent";
import PowerSetterComponent from "../components/PowerSetterComponent";
import { Box, Content, Title } from "../styles/Card";
import {
	HorizontalLine,
	RegularContainer,
	RoundedBorder,
	Trademark,
	UnitContainer,
	VerticalLine,
} from "../styles/Common";
import { allCoagModes, getCoagMode } from "../utils/MonopolarEnums";

import UnitsDisplay from "../components/common/UnitsDisplay";
import IncrementorButtons from "../components/common/IncrementorButtons";
import getIcon from "../styles/Icons";
import {
	COAG_COLOR,
	NRG_COLOR,
	NRG_TITLE_COLOR,
	TITLE_COLOR,
} from "../utils/Colors";
import IconButton from "../components/common/IconButton";
function HeliumView({
	renuvionTitle,
	coolCoagTitle,
	renuvion,
	setRenuvion,
	coag,
	setCoolCoag,
	heliumFlow,
	setHeliumFlow,
	incRenuv,
	decRenuv,
	incCoag,
	incHeliumFlow,
	decHeliumFlow,
	decCoag,
	onShowRenuvionModal,
	onShowCoagModal,
	onShowFlowModal,
	showCoagModal,
	showRenuvionModal,
	showFlowModal,
	isCoagOn,
}) {
	return (
		<Box>
			{showCoagModal && (
				<ModeSetterComponent
					title={coolCoagTitle}
					obj={coag}
					setObj={setCoolCoag}
					color={COAG_COLOR}
					enumValues={allCoagModes}
					getModeEnum={getCoagMode}
					modeTitle="Coag Mode"
				></ModeSetterComponent>
			)}
			{showRenuvionModal && (
				<PowerSetterComponent
					color={NRG_COLOR}
					value={renuvion}
					setValue={setRenuvion}
					isFloat={false}
					range={{ min: 0, max: 100 }}
					title="Renuvion Plasma"
					subtitle="Power"
					units="%"
					titleColor={NRG_TITLE_COLOR}
				></PowerSetterComponent>
			)}
			{showFlowModal && (
				<PowerSetterComponent
					color={NRG_COLOR}
					value={heliumFlow}
					setValue={setHeliumFlow}
					isFloat={true}
					range={{ min: 0, max: 5 }}
					sliderRange={{ min: 0.1, max: 5 }}
					title="Helium Gas Flow"
					subtitle="Gas Flow"
					units="l/min"
					titleColor={NRG_TITLE_COLOR}
				></PowerSetterComponent>
			)}
			<Title
				color="inherit"
				style={{ display: "flex", flexDirection: "row" }}
			>
				<Title color={NRG_TITLE_COLOR}>
					{renuvionTitle}
					<Trademark>®</Trademark>
				</Title>
				{isCoagOn && (
					<Title color={TITLE_COLOR}>
						{coolCoagTitle}
						<Trademark>®</Trademark>
					</Title>
				)}
			</Title>
			<Content>
				<div
					style={{
						gridTemplateRows: "52% 10% 38%",
						display: "grid",
						height: "100%",
					}}
				>
					<RegularContainer isTwoCol={isCoagOn}>
						<div
							style={{ marginRight: isCoagOn ? "-10%" : "0" }}
							className="p-2"
						>
							<div className="d-flex justify-content-center">
								<RoundedBorder
									color="#AA37C7"
									onClick={onShowRenuvionModal}
								>
									POWER
								</RoundedBorder>
							</div>
							<UnitContainer isTwoCol={!isCoagOn}>
								<UnitsDisplay
									action={onShowRenuvionModal}
									num={renuvion}
									unit={"%"}
									mr={isCoagOn ? "3rem" : "-1.6rem"}
								></UnitsDisplay>
								<IncrementorButtons
									bgColor={NRG_COLOR}
									increment={incRenuv}
									decrement={decRenuv}
								/>
							</UnitContainer>
						</div>
						{isCoagOn && (
							<>
								{" "}
								<div style={{ display: "flex" }}>
									<VerticalLine></VerticalLine>
								</div>
								<div className="p-2">
									<div
										style={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											color={COAG_COLOR}
											onClick={onShowCoagModal}
											icon={getCoagMode(coag.mode).icon}
											label={getCoagMode(coag.mode).label}
										>
										</IconButton>
									</div>

									<UnitContainer isTwoCol={isCoagOn}>
										<UnitsDisplay
											action={onShowCoagModal}
											num={coag.power}
											unit={coag.units}
											mr={isCoagOn ? "3rem" : "1rem"}
										></UnitsDisplay>
										<IncrementorButtons
											bgColor={COAG_COLOR}
											increment={incCoag}
											decrement={decCoag}
										/>
									</UnitContainer>
								</div>
							</>
						)}
					</RegularContainer>
					<div>
						<HorizontalLine></HorizontalLine>
					</div>
					<div
						style={{ marginTop: "-5%", position: "relative" }}
						className="p-2"
					>
						<div style={{position: "absolute", left: "10%", top: "15%"}}>
							{" "}
							<span className="icon">
								{getIcon("bottle", null, "3.8rem", "6rem")}
							</span>
							<span className='rotate270deg' style={{position: "absolute", top: "50%", left: "25%", fontWeight: "bold"}}>
								60%
							</span>
						</div>
						<div style={{width: "100%"}}>
							<div className="d-flex justify-content-center">
								<RoundedBorder
									className="px-2"
									color={NRG_COLOR}
									onClick={onShowFlowModal}
								>
									Helium Gas Flow
								</RoundedBorder>
							</div>

							<div
								style={{ marginRight: "0.4rem" }}
								className="d-flex flex-row justify-content-end mt-1"
							>
								<UnitsDisplay
									mr="3.5rem"
									action={onShowFlowModal}
									num={`${Math.floor(heliumFlow)}.${
										(heliumFlow * 10) % 10
									}`}
									unit={"l/min"}
								></UnitsDisplay>
								<IncrementorButtons
									bgColor={NRG_COLOR}
									increment={incHeliumFlow}
									decrement={decHeliumFlow}
								/>
							</div>
						</div>
					</div>
				</div>
			</Content>
		</Box>
	);
}

export default HeliumView;
