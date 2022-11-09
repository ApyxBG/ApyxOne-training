import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { HiPlus } from "@react-icons/all-files/hi/HiPlus";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import MainContainer from "../components/common/MainContainer";
import PresetsListComponent from "../components/PresetsListComponent";
import { AllPresets, SelectedPreset } from "../store/Preset";
import { Box } from "../styles/Card";
import { CircleButton, IconButton, VerticalLine } from "../styles/Common";
import NavBar from "../views/NavBar";
import PresetSettingsView from "../views/PresetSettingsView";
import PencilIcon from "../public/images/pencil.svg";
import TrashCan from "../public/images/trashcan.png";
import { VIEWS } from "../utils/HelpViewUtils";
import { COAG_COLOR, MAIN_BG_COLOR } from "../utils/Colors"
import ModalView from '../views/ModalView';
import { generateDisplayName } from '../utils/PresetUtils';

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

function PresetsScreen() {
	const navigate = useNavigate();
	const location = useLocation();
	const [allPresets, setAllPresets] = useRecoilState(AllPresets);
	const [selectedPreset, setSelectedPreset] = useRecoilState(SelectedPreset);
	const [tryDelete, setTryDelete] = useState(false);

	const getInitialPreset = () => {
		if (allPresets.length > 0) {
			return location.state?.preset || allPresets[0];
		} else {
			return null;
		}
	}
	const [currentPreset, setCurrentPreset] = useState(getInitialPreset());

	const deletePreset = () => {
		let newPresetsList = allPresets.filter((preset) => preset.id !== currentPreset.id);
		setAllPresets(newPresetsList);
		setCurrentPreset(newPresetsList.length > 0 ? newPresetsList[0] : null);
		if (selectedPreset?.id === currentPreset.id) {
			setSelectedPreset(null);
		}
		setTryDelete(false);
	}

	return (
		<MainContainer>
			{tryDelete && (
				<ModalView>
					<Box style={{ width: "18rem", height: "10rem" }}>
						<div
							style={{
								width: "100%",
								height: "70%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							Do you want to delete the Preset?
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
									setTryDelete(false);
								}}
							>
								NO
							</IconButton>
							<IconButton
								style={iconBtnStl}
								color={COAG_COLOR}
								onClick={deletePreset}
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
							navigate("/");
						},
						icon: (
							<HiOutlineChevronLeft
								size="85%"
								color="white"
							></HiOutlineChevronLeft>
						),
					},
				]}
				title="Presets"
				rightButtons={[
					{
						onClick: () => {
							navigate("/createpreset", {
								state: {
									from: "/allpresets"
								}
							});
						},
						icon: <HiPlus color="white" size="85%"></HiPlus>,
					},
					{
						onClick: () => {
							navigate("/help", {
								state: { view: VIEWS.ALL_PRESETS },
							});
						},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<Box
				style={{
					height: "95%",
					paddingLeft: "0.7rem",
					paddingRight: "0.5rem",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						color: "white",
						textAlign: "center",
						height: "10%",
						position: "relative",
					}}
				>
					{currentPreset && generateDisplayName(currentPreset)}
					<div
						style={{
							bottom: "0px",
							right: "0.2rem",
							position: "absolute",
							display: "grid",
							gap: "0.7rem",
							gridTemplateColumns: "auto auto",
						}}
					>
						<CircleButton
							bg={COAG_COLOR}
							style={{ padding: "0.4rem" }}
							onClick={() => {
								navigate("/createpreset", {
									state: {
										preset: currentPreset,
										from: "/allpresets"
									},
								});
							}}
						>
							<img width="100%" alt="" src={PencilIcon}></img>
						</CircleButton>
						<CircleButton
							style={{
								padding: "0.5rem",
							}}
							bg="rgb(23, 34, 56)"
							onClick={() => {
									if (currentPreset) {
										setTryDelete(true)
									}
								}
							}
						>
							<img
								alt=""
								width="auto"
								height="100%"
								src={TrashCan}
							></img>
						</CircleButton>
					</div>
				</div>
				<div style={{ height: "85%", display: "flex" }}>
					<div style={{ display: "inline-block", height: "100%" }}>
						<PresetsListComponent
							selectedPreset={currentPreset}
							setSelectedPreset={setCurrentPreset}
						></PresetsListComponent>
					</div>
					<div style={{ display: "flex" }}>
						<VerticalLine style={{ height: "95%" }}></VerticalLine>
					</div>
					<div style={{ flexGrow: 1 }}>
						{currentPreset && (
							<PresetSettingsView
								preset={currentPreset}
							></PresetSettingsView>
						)}
					</div>
				</div>
				<div
					style={{
						height: "5%",
						display: "flex",
						justifyContent: "end",
					}}
				>
					<IconButton
						style={{
							marginTop: "-3rem",
							marginRight: "0.2rem",
							width: "10rem",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							alignSelf: "center",
							justifySelf: "center",
						}}
						color={COAG_COLOR}
						onClick={() => {
							setSelectedPreset(currentPreset);
							navigate("/");
						}}
					>
						LOAD PRESET
					</IconButton>
				</div>
			</Box>
		</MainContainer>
	);
}

export default PresetsScreen;
