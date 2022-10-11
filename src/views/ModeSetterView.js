import React from "react";
import Keyboard from "../components/common/Keyboard";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Title } from "../styles/Card";
import { LongButton, Slider, VerticalLine } from "../styles/Common";
import EnumView from "./EnumView";
import UnitsDisplay from "../components/common/UnitsDisplay";
import { TITLE_COLOR } from "../utils/Colors";

function ModeSetterView({
	title,
	mode,
	power,
	setMode,
	setPower,
	onSave,
	onClose,
	color,
	enumValues,
	modeTitle,
	isFreshKeyboard,
	setPowerFromKeyboard,
}) {
	return (
		<Modal
			style={{
				backgroundColor: "rgb(39, 50, 78)",
				borderRadius: "34px",
				width: "35rem",
				maxWidth: "unset",
				marginTop: "5%",
			}}
			isOpen={true}
			toggle={onSave}
			contentClassName="override"
		>
			<ModalHeader
				style={{
					backgroundColor: "#405A93",
					border: "none",
					padding: ".5rem",
					justifyContent: "center",
				}}
				toggle={onClose}
				className="justify-content-center"
			>
				<Title color={TITLE_COLOR}>{title}</Title>
			</ModalHeader>
			<ModalBody
				style={{
					backgroundColor: "rgb(39, 50, 78)",
					paddingTop: 0,
					borderBottomLeftRadius: "15px",
					borderBottomRightRadius: "15px",
				}}
			>
				<div
					style={{
						gridTemplateColumns: "45% 10% 45%",
						display: "grid",
						margin: "0 -1rem",
					}}
				>
					<Title color={color}>{modeTitle}</Title>
					<div style={{ backgroundColor: color, display: "flex" }}>
						<VerticalLine></VerticalLine>
					</div>
					<Title color={color}>Power</Title>
				</div>
				<div
					style={{
						gridTemplateColumns: "45% 10% 45%",
						display: "grid",
					}}
				>
					<div
						className="d-flex flex-column p-3"
						style={{ gap: ".7rem" }}
					>
						{enumValues.map((value) => {
							return (
								<EnumView
									key={value.id + Math.random()}
									icon={value.icon}
									label={value.label}
									onClick={() => setMode(value)}
									color={color}
									isSelected={mode === value}
								></EnumView>
							);
						})}
					</div>
					<div style={{ display: "flex" }}>
						<VerticalLine></VerticalLine>
					</div>

					<div
						style={{ marginLeft: "-5%" }}
						className="d-flex flex-column align-items-center"
					>
						<UnitsDisplay mr="-1rem" num={power} unit="w" />

						<Slider
							min={mode.range.min}
							max={mode.range.max}
							val={power}
							className="unit-slider mb-2"
							color={color}
						>
							<input
								type="range"
								min={mode.range.min}
								max={mode.range.max}
								value={power}
								onChange={(event) => {
									setPower(parseInt(event.target.value));
								}}
							></input>
						</Slider>
						<Keyboard
							value={power}
							color={color}
							range={mode.range}
							setValue={setPowerFromKeyboard}
							isFresh={isFreshKeyboard}
						></Keyboard>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						color: "white",
					}}
					className="my-2"
				>
					<LongButton color={color} onClick={onSave}>
						DONE
					</LongButton>
				</div>
			</ModalBody>
		</Modal>
	);
}

export default ModeSetterView;
