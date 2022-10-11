import React from "react";
import FloatKeyboard from "../components/common/FloatKeyboard";
import Keyboard from "../components/common/Keyboard";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Title } from "../styles/Card";
import { LongButton, Slider } from "../styles/Common";
import UnitsDisplay from "../components/common/UnitsDisplay";
import { TITLE_COLOR } from "../utils/Colors";

function PowerSetterView({
	title,
	subtitle,
	power,
	setPower,
	onSave,
	color,
	range,
	isFloat,
	isFreshKeyboard,
	setPowerFromKeyboard,
	units,
	titleColor,
	subtitleColor,
}) {
	return (
		<Modal
			style={{ backgroundColor: "rgb(39, 50, 78)", borderRadius: "34px" }}
			isOpen={true}
			toggle={onSave}
			contentClassName="override"
		>
			<ModalHeader
				style={{
					backgroundColor: titleColor ? titleColor : TITLE_COLOR,
					border: "none",
					padding: ".5rem",
					justifyContent: "center",
				}}
				toggle={onSave}
				className="justify-content-center"
			>
				<Title color={titleColor ? titleColor : TITLE_COLOR}>
					{title}
				</Title>
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
						margin: "0 -1rem",
					}}
				>
					<Title color={subtitleColor ? subtitleColor : color}>
						{subtitle}
					</Title>
				</div>
				<div className="d-flex flex-column align-items-center mb-5">
					<UnitsDisplay
						mr="-1rem"
						num={
							isFloat
								? `${Math.floor(power)}.${
										Math.floor(power * 10) % 10
								  }`
								: power
						}
						unit={units}
					/>

					<Slider
						min={isFloat ? 10 * range.min : range.min}
						max={isFloat ? 10 * range.max : range.max}
						val={isFloat ? 10 * power : power}
						className="unit-slider mb-2"
						color={color}
					>
						<input
							type="range"
							min={isFloat ? 10 * range.min : range.min}
							max={isFloat ? 10 * range.max : range.max}
							value={isFloat ? 10 * power : power}
							onChange={(event) => {
								isFloat
									? setPower(
											parseInt(event.target.value) / 10
									  )
									: setPower(parseInt(event.target.value));
							}}
						></input>
					</Slider>
					{isFloat ? (
						<FloatKeyboard
							value={power}
							color={color}
							range={range}
							setValue={setPowerFromKeyboard}
							isFresh={isFreshKeyboard}
						></FloatKeyboard>
					) : (
						<Keyboard
							value={power}
							color={color}
							range={range}
							setValue={setPowerFromKeyboard}
							isFresh={isFreshKeyboard}
						></Keyboard>
					)}
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

export default PowerSetterView;
