import React from "react";
import styled from "styled-components";
import { Box, Content, Title } from "../styles/Card";
import { HorizontalLine } from "../styles/Common";
import { TITLE_COLOR } from "../utils/Colors";

function PresetNameView({ name, setName, part }) {
	return (
		<Box>
			<Title color={TITLE_COLOR}>Preset Name</Title>
			<Content>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							height: "50%",
							paddingTop: "1.5rem",
						}}
					>
						<div style={{ textAlign: "center" }}>
							{part ? (
								part
							) : (
								<div style={{ color: "rgb(64, 90, 147)" }}>
									Please Select Body Part
								</div>
							)}
						</div>
						<div
							style={{
								width: "100%",
							}}
						>
							<HorizontalLine bg="white"></HorizontalLine>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							height: "50%",
							paddingTop: "1.5rem",
						}}
					>
						<div style={{ textAlign: "center" }}>
							<NameInput
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Type in Name"
							></NameInput>
						</div>
						<div
							style={{
								width: "100%",
							}}
						>
							<HorizontalLine bg="white"></HorizontalLine>
						</div>
					</div>
				</div>
			</Content>
		</Box>
	);
}

const NameInput = styled.input`
	background-color: transparent;
	border: none;
	text-align: center;
	color: white;

	::placeholder {
		color: rgb(64, 90, 147);
	}

	&:focus-visible {
		border: none;
		outline: none;
	}
`;
export default PresetNameView;
