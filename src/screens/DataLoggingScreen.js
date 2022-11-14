import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import MainContainer from "../components/common/MainContainer";
import PowerSetterComponent from "../components/PowerSetterComponent";
import { PatientInfo, ProcedureInfo } from "../store/DataLogging";
import { Box, Content, Title } from "../styles/Card";
import { CircleButton, HorizontalLine, IconButton } from "../styles/Common";
import { COAG_COLOR, TITLE_COLOR , METRICS_DISABLED_COLOR, BOX_COLOR} from "../utils/Colors";
import NavBar from "../views/NavBar";
import SwitchButton from "../views/SwitchButton";

const ROW_STYLE = {
	height: "16%",
	display: "flex",
	justifyContent: "center",
	alignItems: "end",
	paddingBottom: "1rem",
	width: "88%",
	marginLeft: "5%",
};

const objSetter = (obj, key, value) => {
	let result = { ...obj };
	result[key] = value;
	return result;
};

function DataLoggingScreen() {
	const navigate = useNavigate();
	const [patientInfo, setPatientInfo] = useRecoilState(PatientInfo);
	const [procedureInfo, setProcedureInfo] = useRecoilState(ProcedureInfo);
	const [modalProps, setModalProps] = useState();

	return (
		<MainContainer>
			{modalProps && (
				<PowerSetterComponent {...modalProps}></PowerSetterComponent>
			)}
			<NavBar
				leftButtons={[
					{
						onClick: () => {
							navigate(-1);
						},
						icon: (
							<HiOutlineChevronLeft
								size="85%"
								color="white"
							></HiOutlineChevronLeft>
						),
					},
				]}
				title="Data Logging"
				rightButtons={[
					{
						onClick: () => {},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					height: "83%",
				}}
			>
				<div style={{ width: "35%" }}>
					<Box>
						<Title color={TITLE_COLOR}>
							Patient Information
						</Title>
						<Content>
							<div style={ROW_STYLE}>
								<InputRow
									value={patientInfo.reference}
									label="Reference #"
									setValue={(value) =>
										setPatientInfo(
											objSetter(
												patientInfo,
												"reference",
												value
											)
										)
									}
								></InputRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<NumberRow
									label="Age [years]"
									value={patientInfo.age}
									onClick={() => {
										setModalProps({
											title: "Patient Age",
											color: COAG_COLOR,
											value: patientInfo.age,
											setValue: (age) => {
												setPatientInfo({
													...patientInfo,
													age,
												});
												setModalProps(null);
											},
											range: { min: 0, max: 150 },
											isFloat: false,
											units: "years",
											subtitle: "Age [years]",
										});
									}}
								></NumberRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<SexRow
									value={patientInfo.sex}
									setValue={(sex) =>
										setPatientInfo({ ...patientInfo, sex })
									}
								></SexRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<NumberRow
									label={`Height [${
										patientInfo.metric ? "cm" : "ft"
									}]`}
									value={patientInfo.height}
									onClick={() => {
										setModalProps({
											title: "Patient Height",
											color: COAG_COLOR,
											value: patientInfo.height,
											setValue: (height) => {
												setPatientInfo({
													...patientInfo,
													height,
												});
												setModalProps(null);
											},
											range: {
												min: 0,
												max: patientInfo.metric
													? 250
													: 180,
											},
											isFloat: false,
											units: patientInfo.metric
												? "cm"
												: "ft",
											subtitle: `Height [${
												patientInfo.metric ? "cm" : "ft"
											}]`,
										});
									}}
								></NumberRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<NumberRow
									label={`Weight [${
										patientInfo.metric ? "kg" : "lbs"
									}]`}
									value={patientInfo.weight}
									onClick={() => {
										setModalProps({
											title: "Patient Weight",
											color: COAG_COLOR,
											value: patientInfo.weight,
											setValue: (weight) => {
												setPatientInfo({
													...patientInfo,
													weight,
												});
												setModalProps(null);
											},
											range: {
												min: 0,
												max: patientInfo.metric
													? 220
													: 520,
											},
											isFloat: false,
											units: patientInfo.metric
												? "kg"
												: "lbs",
											subtitle: `Weight [${
												patientInfo.metric
													? "kg"
													: "lbs"
											}]`,
										});
									}}
								></NumberRow>
							</div>
							<div style={ROW_STYLE}>
								<div
									style={{
										height: "50%",
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-evenly",
									}}
								>
									<span
										style={{
											marginRight: "1rem",
											color: patientInfo.metric
												? "inherit"
												: METRICS_DISABLED_COLOR,
										}}
									>
										Metric
									</span>
									<SwitchButton
										checked={!patientInfo.metric}
										onClick={() => {
											let metric = !patientInfo.metric;
											let weight =
												metric &&
												patientInfo.weight > 220
													? 220
													: patientInfo.weight;
											let height =
												!metric &&
												patientInfo.height > 180
													? 180
													: patientInfo.height;
											setPatientInfo({
												...patientInfo,
												metric,
												weight,
												height,
											});
										}}
									></SwitchButton>
									<span
										style={{
											marginLeft: "1rem",
											color: patientInfo.metric
												? METRICS_DISABLED_COLOR
												: "inherit",
										}}
									>
										Imperial
									</span>
								</div>
							</div>
						</Content>
					</Box>
				</div>
				<div style={{ width: "65%", paddingLeft: "1rem" }}>
					<Box>
						<Title color={TITLE_COLOR}>
							Procedure Information
						</Title>
						<Content>
							<div style={ROW_STYLE}>
								<InputRow
									value={procedureInfo.type}
									label="Procedure Type"
									setValue={(value) =>
										setProcedureInfo(
											objSetter(
												procedureInfo,
												"type",
												value
											)
										)
									}
								></InputRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<InputRow
									value={procedureInfo.concProducts}
									label="Concomitant Products"
									setValue={(value) =>
										setProcedureInfo(
											objSetter(
												procedureInfo,
												"concProducts",
												value
											)
										)
									}
								></InputRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<InputRow
									value={procedureInfo.concProcedures}
									label="Concomitant Procedures"
									setValue={(value) =>
										setProcedureInfo(
											objSetter(
												procedureInfo,
												"concProcedures",
												value
											)
										)
									}
								></InputRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<InputRow
									value={procedureInfo.otherInfo}
									label="Other Information"
									setValue={(value) =>
										setProcedureInfo(
											objSetter(
												procedureInfo,
												"otherInfo",
												value
											)
										)
									}
								></InputRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<NumberRow
									label="Tumescent Volume [ml]"
									value={procedureInfo.tumVolume}
									onClick={() => {
										setModalProps({
											title: "Patient Tumescent Volume",
											color: COAG_COLOR,
											value: procedureInfo.tumVolume,
											setValue: (tumVolume) => {
												setProcedureInfo({
													...procedureInfo,
													tumVolume,
												});
												setModalProps(null);
											},
											range: { min: 0, max: 9999 },
											isFloat: false,
											units: "ml",
											subtitle: "Tumescent Volume [ml]",
										});
									}}
								></NumberRow>
							</div>
							<HorizontalLine width="90%"></HorizontalLine>
							<div style={ROW_STYLE}>
								<NumberRow
									label="Aspiration Volume [ml]"
									value={procedureInfo.aspirationVolume}
									onClick={() => {
										setModalProps({
											title: "Patient Aspiration Volume",
											color: COAG_COLOR,
											value: procedureInfo.aspirationVolume,
											setValue: (aspirationVolume) => {
												setProcedureInfo({
													...procedureInfo,
													aspirationVolume,
												});
												setModalProps(null);
											},
											range: { min: 0, max: 9999 },
											isFloat: false,
											units: "ml",
											subtitle: "Aspiration Volume [ml]",
										});
									}}
								></NumberRow>
							</div>
						</Content>
					</Box>
				</div>
			</div>
			<div style={{ height: "12%", display: "flex", justifyContent: "end", alignItems: "center" }}>
			<IconButton
					style={{
						height: "50%",
						width: "10%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						justifySelf: "center",
						marginLeft: "5%",
					}}
					color={BOX_COLOR}
					onClick={() => navigate(-1)}
				>
					CANCEL
				</IconButton>
				<IconButton
					style={{
						height: "50%",
						width: "10%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						justifySelf: "center",
						marginRight: "5%",
						marginLeft: "5%",
					}}
					color={COAG_COLOR}
					onClick={() => navigate(-1)}
				>
					SAVE
				</IconButton>
			</div>
		</MainContainer>
	);
}

function InputRow({ label, value, setValue }) {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				whiteSpace: "nowrap",
			}}
		>
			<div
				style={{
					width: "50%",
					display: "flex",
					justifyContent: "start",
				}}
			>
				{label}
			</div>
			<MyInput
				style={{
					width: "50%",
					display: "flex",
					justifyContent: "center",
					borderBottom: "solid 0.1rem white",
					borderTop: "none",
					borderLeft: "none",
					borderRight: "none",
					backgroundColor: "inherit",
					color: "white",
					textAlign: "center",
				}}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></MyInput>
		</div>
	);
}

const MyInput = styled.input`
	:focus-visible {
		border: none;
		outline: none;
	}
`;

function NumberRow({ label, value, onClick }) {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				whiteSpace: "nowrap",
			}}
		>
			<div
				style={{
					width: "50%",
					display: "flex",
					justifyContent: "start",
				}}
			>
				{label}
			</div>
			<div
				style={{
					width: "50%",
					display: "flex",
					justifyContent: "center",
					borderBottom: "solid 0.1rem white",
					borderTop: "none",
					borderLeft: "none",
					borderRight: "none",
					backgroundColor: "inherit",
					color: "white",
					textAlign: "center",
				}}
				onClick={onClick}
			>
				{value}
			</div>
		</div>
	);
}

function SexRow({ value, setValue }) {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				whiteSpace: "nowrap",
			}}
		>
			<div
				style={{
					width: "50%",
					display: "flex",
					justifyContent: "start",
				}}
			>
				Sex
			</div>
			<div
				style={{
					width: "50%",
					display: "flex",
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<CircleButton
					style={{color: value === "M" ? "inherit" : "#405A93"}}
					bg={value === "M" ? COAG_COLOR : "rgb(23, 34, 56)"}
					onClick={() => setValue("M")}
				>
					M
				</CircleButton>
				<CircleButton
					style={{color: value === "F" ? "inherit" : "#405A93"}}
					bg={value === "F" ? COAG_COLOR : "rgb(23, 34, 56)"}
					onClick={() => setValue("F")}
				>
					F
				</CircleButton>
				<CircleButton
					style={{color: value === "O" ? "inherit" : "#405A93"}}
					bg={value === "O" ? COAG_COLOR : "rgb(23, 34, 56)"}
					onClick={() => setValue("O")}
				>
					O
				</CircleButton>
			</div>
		</div>
	);
}

export default DataLoggingScreen;
