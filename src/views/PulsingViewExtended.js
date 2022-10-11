import React from "react";
import IncrementorButtons from "../components/common/IncrementorButtons";
import UnitsDisplay from "../components/common/UnitsDisplay";
import PowerSetterComponent from "../components/PowerSetterComponent";
import { Box } from "../styles/Card";
import { RoundedBorder, UnitContainer, VerticalLine } from "../styles/Common";
import ToggleButton from "./ToggleButton";
import {
	LABEL_DISABLED,
	MAIN_BG_COLOR,
	NRG_COLOR,
	NRG_TITLE_COLOR,
	TEXT_DISABLED_COLOR,
} from "../utils/Colors";

function PulsingViewExtended({
	enabled,
	switchEnabled,
	showOnTimeModal,
	showOffTimeModal,
	onShowOnTimeModal,
	onShowOffTimeModal,
	onTime,
	offTime,
	setOnTime,
	setOffTime,
	incOnTime,
	decOnTime,
	incOffTime,
	decOffTime,
	range,
}) {
	return (
		<Box>
			{showOnTimeModal && (
				<PowerSetterComponent
					color={NRG_COLOR}
					value={onTime}
					setValue={setOnTime}
					isFloat={false}
					range={range}
					title="Pulsing On Time"
					subtitle="On Time"
					units="ms"
					titleColor={NRG_TITLE_COLOR}
				></PowerSetterComponent>
			)}
			{showOffTimeModal && (
				<PowerSetterComponent
					color={NRG_COLOR}
					value={offTime}
					setValue={setOffTime}
					isFloat={false}
					range={range}
					title="Pulsing Off Time"
					subtitle="Off Time"
					units="ms"
					titleColor={NRG_TITLE_COLOR}
				></PowerSetterComponent>
			)}
			<div
				style={{ display: "grid", gridTemplateColumns: "15% 10% 75%" }}
				className="h-100"
			>
				<div
					style={{ marginRight: "-15%" }}
					className="d-flex align-items-center justify-content-center my-3 ps-2  "
				>
					<div className="d-flex align-items-center">
						<ToggleButton
							checked={enabled}
							onClick={switchEnabled}
						></ToggleButton>
						<div
							style={{ fontSize: "0.8rem", marginLeft: "0.8rem" }}
							className="d-flex "
						>
							<span
								style={{
									color: enabled ? "white" : "#405A93",
									letterSpacing: "2px",
								}}
							>
								{" "}
								Pulsing
							</span>
						</div>
					</div>
				</div>

				<VerticalLine></VerticalLine>

				<div style={{ marginLeft: "-10%" }} className="d-flex p-2">
					<div style={{ width: "50%" }}>
						<div className="d-flex justify-content-center me-4">
							{" "}
							<RoundedBorder
								className="px-3"
								color={enabled ? NRG_COLOR : LABEL_DISABLED}
								onClick={onShowOnTimeModal}
							>
								ON TIME
							</RoundedBorder>{" "}
						</div>
						<UnitContainer
							style={{ marginTop: 0 }}
							className="d-flex "
						>
							<UnitsDisplay
								action={onShowOnTimeModal}
								num={onTime}
								unit={"ms"}
								color={enabled ? "white" : TEXT_DISABLED_COLOR}
							/>
							<IncrementorButtons
								bgColor={enabled ? NRG_COLOR : MAIN_BG_COLOR}
								increment={incOnTime}
								decrement={decOnTime}
								color={enabled ? "white" : LABEL_DISABLED}
							/>{" "}
						</UnitContainer>
					</div>
					<div style={{ width: "50%" }}>
						<div className="d-flex justify-content-center me-4 ">
							{" "}
							<RoundedBorder
								className="px-3"
								color={enabled ? NRG_COLOR : LABEL_DISABLED}
								onClick={onShowOffTimeModal}
							>
								OFF TIME
							</RoundedBorder>{" "}
						</div>

						<UnitContainer
							style={{ marginTop: 0 }}
							className="d-flex "
						>
							<UnitsDisplay
								action={onShowOffTimeModal}
								num={offTime}
								unit={"ms"}
								color={enabled ? "white" : TEXT_DISABLED_COLOR}
							/>
							<IncrementorButtons
								bgColor={enabled ? NRG_COLOR : MAIN_BG_COLOR}
								increment={incOffTime}
								decrement={decOffTime}
								color={enabled ? "white" : LABEL_DISABLED}
							/>{" "}
						</UnitContainer>
					</div>
				</div>
			</div>
		</Box>
	);
}

export default PulsingViewExtended;
