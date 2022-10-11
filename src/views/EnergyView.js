import React from "react";
import { Box } from "../styles/Card";
import { HorizontalLine, LongButton } from "../styles/Common";
import ToggleButton from "./ToggleButton";
import PowerSetterComponent from "../components/PowerSetterComponent";
import ReloadButton from "../components/common/ReloadButton";
import {
	LABEL_DISABLED,
	MAIN_BG_COLOR,
	NRG_COLOR,
	NRG_TITLE_COLOR,
	TEXT_DISABLED_COLOR,
} from "../utils/Colors";

function EnergyView({
	switchLimitEnabled,
	switchCounterEnabled,
	counter,
	limit,
	setLimit,
	showLimitModal,
	onShowLimitModal,
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
				style={{ marginRight: "0.4rem" }}
				className="d-flex justify-content-between px-2  p-1 align-items-center"
			>
				<div className="d-flex justify-content-between align-items-center">
					<ToggleButton
						checked={counter.enabled}
						onClick={switchCounterEnabled}
					></ToggleButton>
					<div
						style={{
							fontSize: "0.8rem",
							marginLeft: "0.5rem",
							color: counter.enabled ? "white" : LABEL_DISABLED,
						}}
						className="d-flex flex-column"
					>
						<span className="">Energy</span>
						<span className="">Counter</span>
					</div>
				</div>
				<div
					className="d-flex flex-column"
					style={{
						fontSize: "0.8rem",
						color: counter.enabled ? "#AA37C7" : LABEL_DISABLED,
					}}
				>
					<span className="">Energy</span>
					<span className="">Delivered</span>
				</div>
				<div>
					<div
						style={{
							display: "inline-block",
							color: counter.enabled
								? "#fff"
								: TEXT_DISABLED_COLOR,
						}}
					>
						<span
							style={{
								fontSize: "1.8rem",
							}}
							className="me-2"
						>{`${Math.floor(counter.value)}.${
							(counter.value * 10) % 10
						}`}</span>
						<span className="">kj</span>
					</div>
				</div>
				<div className="">
					{" "}
					<ReloadButton
						className=""
						bg={counter.enabled ? NRG_COLOR : MAIN_BG_COLOR}
						color={counter.enabled ? "white" : LABEL_DISABLED}
					/>
				</div>
			</div>
			<div>
				<HorizontalLine></HorizontalLine>
			</div>
			<div
				style={{ marginRight: "0.4rem" }}
				className="d-flex justify-content-between px-2 p-1 align-items-center"
			>
				<div className="d-flex justify-content-between align-items-center">
					<ToggleButton
						checked={limit.enabled}
						onClick={switchLimitEnabled}
					></ToggleButton>
					<div
						style={{
							fontSize: "0.8rem",
							marginLeft: ".5rem",
							color: limit.enabled ? "white" : LABEL_DISABLED,
						}}
						className="d-flex flex-column "
					>
						<span className="">Energy</span>
						<span className="">Limit</span>
					</div>
				</div>
				<div onClick={onShowLimitModal}>
					{/* <div style={{ display: "inline-block" }}></div> */}

					<LongButton
						textColor={
							limit.enabled ? "white" : TEXT_DISABLED_COLOR
						}
						color="#172238"
						onClick={() => {}}
						fontSize="0.9rem"
						paddingX="2.3rem"
					>
						{`${Math.floor(limit.value)}.${
							(limit.value * 10) % 10
						}`}{" "}
						kj MAX
					</LongButton>
				</div>
				<div className="">
					{" "}
					<ReloadButton
						className=""
						bg={limit.enabled ? NRG_COLOR : MAIN_BG_COLOR}
						color={limit.enabled ? "white" : LABEL_DISABLED}
					/>
				</div>
			</div>
		</Box>
	);
}

export default EnergyView;
