import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { HiPlus } from "@react-icons/all-files/hi/HiPlus";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
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
import { COAG_COLOR } from "../utils/Colors"

function PresetsScreen() {
	const navigate = useNavigate();
	const allPresets = useRecoilValue(AllPresets);
	const [, setSelectedPreset] = useRecoilState(SelectedPreset);

	const [currentPreset, setCurrentPreset] = useState(
		allPresets.length > 0 ? allPresets[0] : null
	);

	return (
		<MainContainer>
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
				title="Presets"
				rightButtons={[
					{
						onClick: () => {
							navigate("/createpreset");
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
					{currentPreset &&
						`${currentPreset.bodyPart?.part} - ${
							currentPreset.name || ""
						}`}
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
						Load Preset
					</IconButton>
				</div>
			</Box>
		</MainContainer>
	);
}

export default PresetsScreen;
