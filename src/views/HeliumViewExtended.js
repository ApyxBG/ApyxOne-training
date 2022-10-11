import React from "react";
import ModeSetterComponent from "../components/ModeSetterComponent";
import PowerSetterComponent from "../components/PowerSetterComponent";
import { Box, Content, Title } from "../styles/Card";
import {
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
import { COAG_COLOR, NRG_COLOR, NRG_TITLE_COLOR, TITLE_COLOR } from "../utils/Colors";
import IconButton from "../components/common/IconButton"

function HeliumViewExtended({
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
		<>
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
				></PowerSetterComponent>
			)}
			{showFlowModal && (
				<PowerSetterComponent
					color={NRG_COLOR}
					value={heliumFlow}
					setValue={setHeliumFlow}
					isFloat={true}
					range={{ min: 0, max: 5 }}
					title="Helium Gas Flow"
					subtitle="Gas Flow"
					units="l/min"
				></PowerSetterComponent>
			)}

			{/* <Content> */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: isCoagOn ? "1fr 1fr 1fr" : "1fr",
					gridGap: "1rem",
				}}
				className="h-100"
			>
				<Box
					style={{
						gridColumnStart: 1,
						gridColumnEnd: isCoagOn ? 3 : 2,
					}}
					className=""
				>
					{" "}
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
						<RegularContainer isTwoCol={true}>
							<div
								style={{ marginRight: "-10%" }}
								className="p-2"
							>
								<div className="d-flex justify-content-center">
									<RoundedBorder color={NRG_COLOR}>
										POWER
									</RoundedBorder>
								</div>
								<UnitContainer isTwoCol={!isCoagOn}>
									<UnitsDisplay
										action={onShowRenuvionModal}
										num={renuvion}
										unit={"%"}
										mr={isCoagOn ? "3rem" : "-1.6rem"}
										fontSize={isCoagOn ? "3rem" : "4rem"}
										unitSize={
											isCoagOn
												? "calc(1.275rem + 0.3vw)"
												: "2rem"
										}
									></UnitsDisplay>
									<IncrementorButtons
										increment={incRenuv}
										decrement={decRenuv}
										className={isCoagOn ? "" : "mt-3"}
										bgColor={NRG_COLOR}
									/>
								</UnitContainer>
							</div>
							{isCoagOn ? (
								<>
									{" "}
									<VerticalLine></VerticalLine>
									<div
										style={{ marginLeft: "-10%" }}
										className="p-2"
									>
										<div className="d-flex justify-content-center">
											<IconButton
												color={COAG_COLOR}
												onClick={onShowCoagModal}
												icon={getCoagMode(coag.mode).icon}
												label={getCoagMode(coag.mode).label}
											>
											</IconButton>
										</div>

										<UnitContainer isTwoCol={!isCoagOn}>
											<UnitsDisplay
												action={onShowCoagModal}
												num={coag.power}
												unit={coag.units}
												mr={isCoagOn ? "3rem" : "1rem"}
											></UnitsDisplay>
											<IncrementorButtons
												increment={incCoag}
												decrement={decCoag}
												bgColor={COAG_COLOR}
											/>
										</UnitContainer>
									</div>
								</>
							) : (
								<>
									<div style={{ display: "flex" }}>
										<VerticalLine></VerticalLine>
									</div>
									<div className="ps-0 p-2">
										<div className="d-flex justify-content-center">
											<RoundedBorder
												className="px-2"
												color="#AA37C7"
											>
												Helium Gas Flow
											</RoundedBorder>
										</div>

										<div className="d-flex justify-content-between">
											{" "}
											<div className="">
												{" "}
												<span className="icon">
													{getIcon(
														"bottle",
														"white",
														"4.8rem",
														"7rem"
													)}
												</span>
											</div>
											<UnitContainer isTwoCol={false}>
												<UnitsDisplay
													mr="4rem"
													action={onShowFlowModal}
													num={`${Math.floor(
														heliumFlow
													)}.${
														(heliumFlow * 10) % 10
													}`}
													unit={"l/min"}
													fontSize="4rem"
												></UnitsDisplay>
												<IncrementorButtons
													className="mt-3"
													increment={incHeliumFlow}
													decrement={decHeliumFlow}
													bgColor={NRG_COLOR}
												/>
											</UnitContainer>
										</div>
									</div>
								</>
							)}
						</RegularContainer>
					</Content>
				</Box>
				{isCoagOn && (
					<Box>
						<Title
							color="inherit"
							style={{ display: "flex", flexDirection: "row" }}
						>
							<Title color={NRG_TITLE_COLOR}>Helium Gas</Title>
						</Title>
						<div className="ps-0 p-2">
							<div className="d-flex justify-content-center">
								<RoundedBorder className="px-2" color="#AA37C7">
									Helium Gas Flow
								</RoundedBorder>
							</div>

							<div className="d-flex justify-content-between">
								{" "}
								<div className="">
									{" "}
									<span className="icon">
										{getIcon(
											"bottle",
											"white",
											"3.8rem",
											"6rem"
										)}
									</span>
								</div>
								<UnitContainer isTwoCol={false}>
									<UnitsDisplay
										mr="2.5rem"
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
								</UnitContainer>
							</div>
						</div>
					</Box>
				)}
			</div>
		</>
	);
}

export default HeliumViewExtended;
