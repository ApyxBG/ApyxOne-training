import React from "react";
import { Box } from "../styles/Card";
import {
	LongButton,
	RoundedBorder,
	UnitContainer,
	VerticalLine,
} from "../styles/Common";
import ToggleButton from "./ToggleButton";
import PowerSetterComponent from "../components/PowerSetterComponent";
import ReloadButton from "../components/common/ReloadButton";
import UnitsDisplay from "../components/common/UnitsDisplay";
import IncrementorButtons from "../components/common/IncrementorButtons";
import {
	LABEL_DISABLED,
	MAIN_BG_COLOR,
	NRG_COLOR,
	NRG_TITLE_COLOR,
	TEXT_DISABLED_COLOR,
} from "../utils/Colors";

function EnergyViewExtended({
	switchLimitEnabled,
	switchCounterEnabled,
	counter,
	limit,
	setLimit,
	showLimitModal,
	onShowLimitModal,
	incLimit,
	decLimit,
}) {
	return (
		<Box>
			{showLimitModal && (
				<PowerSetterComponent
					color={NRG_COLOR}
					value={limit.value}
					setValue={setLimit}
					isFloat={true}
					range={{ min: 0, max: 10 }}
					title="Energy Counter"
					subtitle="Total Energy"
					units="kj"
					titleColor={NRG_TITLE_COLOR}
				></PowerSetterComponent>
			)}
			<div
				style={{ display: "grid", gridTemplateColumns: "15% 10% 75%" }}
				className="h-100"
			>
				<div
					style={{ marginRight: "-15%" }}
					className="d-flex flex-column justify-content-between my-3 px-2  p-1 "
				>
					<div className="d-flex align-items-center">
						<ToggleButton
							checked={counter.enabled}
							onClick={switchCounterEnabled}
						></ToggleButton>
						<div
							style={{
								fontSize: "0.8rem",
								marginLeft: "0.8rem",
								color: counter.enabled
									? "white"
									: LABEL_DISABLED,
							}}
							className="d-flex flex-column"
						>
							<span className="">Energy</span>
							<span className="">Counter</span>
						</div>
					</div>
					<div className="d-flex  align-items-center">
						<ToggleButton
							checked={limit.enabled}
							onClick={switchLimitEnabled}
						></ToggleButton>
						<div
							style={{
								fontSize: "0.8rem",
								marginLeft: "0.8rem",
								color: counter.enabled
									? "white"
									: LABEL_DISABLED,
							}}
							className="d-flex flex-column"
						>
							<span className="">Energy</span>
							<span className="">Limit</span>
						</div>
					</div>
				</div>

				<VerticalLine></VerticalLine>

				<div
					style={{ marginLeft: "-10%" }}
					className="d-flex justify-content-between px-2 p-2 "
				>
					<div style={{ width: "50%" }} className="">
						<div className="d-flex flex-column justify-content-start align-items-center">
							<div className="">
								{" "}
								<RoundedBorder
									className="px-3"
									color={
										counter.enabled
											? NRG_COLOR
											: LABEL_DISABLED
									}
								>
									Energy Delivered
								</RoundedBorder>{" "}
							</div>
							<div
								style={{ marginTop: "0.8rem" }}
								className="d-flex justify-content-center w-100 align-items-center ms-5"
							>
								{" "}
								<UnitsDisplay
									num={`${Math.floor(counter.value)}.${
										(counter.value * 10) % 10
									}`}
									unit={"kj"}
									mr="0"
									color={
										counter.enabled
											? "white"
											: TEXT_DISABLED_COLOR
									}
								/>{" "}
								<div className="ms-4 mt-3">
									{" "}
									<ReloadButton
										className=""
										bg={
											counter.enabled
												? NRG_COLOR
												: MAIN_BG_COLOR
										}
										color={
											counter.enabled
												? "white"
												: LABEL_DISABLED
										}
									/>
								</div>
							</div>
						</div>
					</div>

					<div style={{ width: "50%" }}>
						<div className="d-flex justify-content-center me-4">
							{" "}
							<RoundedBorder
								className="px-3"
								color={
									limit.enabled ? NRG_COLOR : LABEL_DISABLED
								}
								onClick={onShowLimitModal}
							>
								Energy Limit
							</RoundedBorder>{" "}
						</div>
						<UnitContainer className="d-flex ">
							<UnitsDisplay
								action={onShowLimitModal}
								num={`${Math.floor(limit.value)}.${
									(limit.value * 10) % 10
								}`}
								unit={"kj"}
								color={
									limit.enabled
										? "white"
										: TEXT_DISABLED_COLOR
								}
							/>
							<div style={{ marginTop: "-1.5rem" }} className="">
								<IncrementorButtons
									bgColor={
										limit.enabled
											? NRG_COLOR
											: MAIN_BG_COLOR
									}
									increment={incLimit}
									decrement={decLimit}
									color={
										limit.enabled ? "white" : LABEL_DISABLED
									}
								/>{" "}
								<ReloadButton
									className="mt-2"
									bg={
										limit.enabled
											? NRG_COLOR
											: MAIN_BG_COLOR
									}
									color={
										limit.enabled ? "white" : LABEL_DISABLED
									}
								/>
							</div>
						</UnitContainer>
						<div style={{ width: "100%", position: "relative" }}>
							<LongButton
								color={MAIN_BG_COLOR}
								style={{
									left: "10%",
									position: "absolute",
									height: "1.5rem",
									width: "70%",
								}}
							></LongButton>
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
}

export default EnergyViewExtended;
