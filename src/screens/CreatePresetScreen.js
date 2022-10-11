import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createDefaultPreset } from "../utils/PresetUtils";
import MainContainer from "../components/common/MainContainer";
import NavBar from "../views/NavBar";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import BodyComponent from "../components/BodyComponent";
import PresetNameView from "../views/PresetNameView";
import { useRecoilState } from "recoil";
import { AllPresets, SelectedPreset } from "../store/Preset";
import PresetSettingsView from "../views/PresetSettingsView";
import { IconButton } from "../styles/Common";
import { VIEWS } from "../utils/HelpViewUtils";
import { COAG_COLOR, MAIN_BG_COLOR } from "../utils/Colors";
import ModalView from "../views/ModalView";
import { Box } from "../styles/Card";

const iconBtnStl = {
	height: "70%",
	width: "40%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "center",
	justifySelf: "center",
	fontSize: "90%",
	minWidth: "unset"
};

function CreatePresetScreen() {
	const location = useLocation();
	const navigate = useNavigate();
	const [tryDiscard, setTryDiscard] = useState(false);
	const [preset, setPreset] = useState(
		location.state && location.state.preset
			? location.state.preset
			: createDefaultPreset()
	);

	const [, setSelectedPreset] = useRecoilState(SelectedPreset);

	const [allPresets, setAllPresets] = useRecoilState(AllPresets);

	const save = () => {
		if (!preset.bodyPart.part) {
		} else {
			let newPreset = { ...preset, id: Math.random() };
			setPreset(newPreset);
			setAllPresets([...allPresets, newPreset]);
			setSelectedPreset(newPreset);
			navigate("/");
		}
	};

	const update = () => {
		setAllPresets(
			allPresets.map((ps) => {
				return ps.id === preset.id ? preset : ps;
			})
		);
	};

	const mySetPreset = (pr) => {
		//set modified
		setPreset(pr);
	};

	return (
		<MainContainer>
			{tryDiscard && (
				<ModalView>
					<Box style={{ width: "16rem", height: "10rem" }}>
						<div
							style={{
								width: "100%",
								height: "70%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							Cancel Preset?
						</div>
						<div
							style={{
								width: "100%",
								height: "30%",
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								marginTop: "-1rem",
							}}
						>
							<IconButton
								style={iconBtnStl}
								color={MAIN_BG_COLOR}
								onClick={() => {
									setTryDiscard(false);
								}}
							>
								NO
							</IconButton>
							<IconButton
								style={iconBtnStl}
								color={COAG_COLOR}
								onClick={() => {
									navigate(-1)
								}}
							>
								YES
							</IconButton>
						</div>
					</Box>
				</ModalView>
			)}
			<NavBar
				leftButtons={[
					{
						onClick: () => {
							setTryDiscard(true);
						},
						icon: (
							<HiOutlineChevronLeft
								size="85%"
								color="white"
							></HiOutlineChevronLeft>
						),
					},
				]}
				title={preset.id ? "Edit Preset" : "Create Preset"}
				rightButtons={[
					{
						onClick: () => {
							navigate("/help", {
								state: { view: VIEWS.CREATE_PRESET },
							});
						},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "40% 35% 25%",
					gridTemplateRows: "30% 55% 15%",
					height: "95%",
				}}
			>
				<div
					style={{
						gridRowStart: 1,
						gridRowEnd: 2,
						gridColumnStart: 1,
						gridColumnEnd: 2,
						padding: "0 1% 1% 1%",
					}}
				>
					<PresetNameView
						name={preset.name || ""}
						part={preset.bodyPart.part}
						setName={(name) => {
							setPreset({ ...preset, name });
						}}
					></PresetNameView>
				</div>
				<div
					style={{
						gridRowStart: 2,
						gridRowEnd: 4,
						gridColumnStart: 1,
						gridColumnEnd: 2,
						padding: "1%",
					}}
				>
					<BodyComponent
						part={preset.bodyPart.part}
						group={preset.bodyPart.group}
						setPart={(part, group) =>
							setPreset({ ...preset, bodyPart: { part, group } })
						}
					></BodyComponent>
				</div>
				<div
					style={{
						gridRowStart: 1,
						gridRowEnd: 3,
						gridColumnStart: 2,
						gridColumnEnd: 4,
						padding: "0 1% 1% 1%",
					}}
				>
					<PresetSettingsView
						preset={preset}
						setPreset={mySetPreset}
					></PresetSettingsView>
				</div>
				<div
					style={{
						gridRowStart: 3,
						gridRowEnd: 4,
						gridColumnStart: 3,
						gridColumnEnd: 4,
						padding: "1%",
						display: "grid",
					}}
				>
					{preset.id ? (
						<IconButton
							style={{
								height: "40%",
								width: "80%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignSelf: "center",
								justifySelf: "center",
							}}
							color={COAG_COLOR}
							onClick={update}
						>
							UPDATE
						</IconButton>
					) : (
						<IconButton
							style={{
								height: "40%",
								width: "80%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignSelf: "center",
								justifySelf: "center",
							}}
							color={COAG_COLOR}
							onClick={save}
						>
							SAVE
						</IconButton>
					)}
				</div>
			</div>
		</MainContainer>
	);
}

export default CreatePresetScreen;
