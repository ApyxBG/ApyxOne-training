import React from "react";
import ModeSetterComponent from "../components/ModeSetterComponent";
import { Box, Content, Title } from "../styles/Card";
import { VerticalLine } from "../styles/Common";
import { allModes, getMode } from "../utils/BipolarEnums";
import ToggleButton from "./ToggleButton";
import IncrementorButtons from "../components/common/IncrementorButtons";
import UnitsDisplay from "../components/common/UnitsDisplay";
import { TITLE_COLOR, COAG_COLOR } from "../utils/Colors";
import IconButton from "../components/common/IconButton";

function BipolarView({
	showModal,
	onShowModal,
	bipolar,
	setBipolar,
	incPower,
	decPower,
	isAuto,
	switchAuto,
}) {
	return (
		<Box>
			{showModal && (
				<ModeSetterComponent
					title="Bipolar"
					color={COAG_COLOR}
					enumValues={allModes}
					getModeEnum={getMode}
					obj={bipolar}
					setObj={setBipolar}
				></ModeSetterComponent>
			)}
			<Title color={TITLE_COLOR}>Bipolar</Title>
			<Content>
				<div
					style={{
						gridTemplateColumns: "20% 10% 70%",
						display: "grid",
						height: "100%",
					}}
				>
					<div
						style={{ marginRight: "-25%" }}
						className="p-2 mt-2 d-flex align-items-center flex-column"
					>
						<div className="mb-2">Auto</div>
						<div>
							<ToggleButton
								checked={isAuto}
								onClick={switchAuto}
							></ToggleButton>
						</div>
					</div>
					<div style={{ display: "flex" }}>
						<VerticalLine></VerticalLine>
					</div>
					<div
						style={{
							gridTemplateColumns: "40% 60%",
							display: "grid",

							alignItems: "center",
							marginLeft: "-7%",
						}}
						className="p-2"
					>
						<div style={{}}>
							<IconButton
								color={COAG_COLOR}
								onClick={onShowModal}
								icon={getMode(bipolar.mode).icon}
								label={getMode(bipolar.mode).label}
							></IconButton>
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "end",
								marginRight: ".4rem",
							}}
						>
							<UnitsDisplay
								action={onShowModal}
								mr="1rem"
								num={bipolar.power}
								unit={bipolar.units}
							/>

							<IncrementorButtons
								bgColor={COAG_COLOR}
								increment={incPower}
								decrement={decPower}
							/>
						</div>
					</div>
				</div>
			</Content>
		</Box>
	);
}

export default BipolarView;
