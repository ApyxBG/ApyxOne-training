import { useNavigate } from "react-router-dom";
import MainContainer from "../components/common/MainContainer";
import PresetView from "../components/PresetView";
import NavBar from "../views/NavBar";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
	AllPresets,
	Bipolar,
	Energy,
	Helium,
	Monopolar1,
	Monopolar2,
	Pulsing,
	SelectedPreset,
} from "../store/Preset";
import { useEffect, useState } from "react";
import ModalView from "../views/ModalView";
import ToggleButton from "../views/ToggleButton";
import { COAG_COLOR, LABEL_DISABLED, MAIN_BG_COLOR } from "../utils/Colors";
import { Box } from "../styles/Card";
import { IconButton } from "../styles/Common";
import { VIEWS } from "../utils/HelpViewUtils";
import { generateDisplayName } from '../utils/PresetUtils';
import { PresetsScreenFormer } from '../store/Navigation';

const iconBtnStl = {
	height: "70%",
	width: "30%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "center",
	justifySelf: "center",
	fontSize: "90%",
};

function ElectrosurgeryScreen() {
	const navigate = useNavigate();
	const [monopolar1, setMonopolar1] = useRecoilState(Monopolar1);
	const [monopolar2, setMonopolar2] = useRecoilState(Monopolar2);
	const [bipolar, setBipolar] = useRecoilState(Bipolar);
	const [helium, setHelium] = useRecoilState(Helium);
	const [energy, setEnergy] = useRecoilState(Energy);
	const [pulsing, setPulsing] = useRecoilState(Pulsing);
	const [allPresets, setAllPresets] = useRecoilState(AllPresets);
	const [selectedPreset, setSelectedPreset] = useRecoilState(SelectedPreset);
	const [showSave, setShowSave] = useState(false);
	const [showMonopolar, setShowMonopolar] = useState(true);
	const [showCoolCoag, setShowCoolCoag] = useState(true);
	const setPresetsScreenFormer = useSetRecoilState(PresetsScreenFormer);

	useEffect(() => {
		if (selectedPreset && !selectedPreset.modified) {
			setMonopolar1(selectedPreset.monopolar1);
			setMonopolar2(selectedPreset.monopolar2);
			setBipolar(selectedPreset.bipolar);
			setHelium(selectedPreset.helium);
			setEnergy(selectedPreset.energy);
			setPulsing(selectedPreset.pulsing);
		}
	}, [selectedPreset]);

	function wrapSetter(setter) {
		return (value) => {
			if (selectedPreset)
				setSelectedPreset({ ...selectedPreset, modified: true });
			setter(value);
		};
	}

	const onSaveClick = () => {
		if (selectedPreset && selectedPreset.modified) {
			setShowSave(true);
		} else {
			createNew();
		}
	};

	const createNew = () => {
		navigate("/createpreset", {
			state: {
				preset: {
					bodyPart: { part: null, group: null },
					monopolar1,
					monopolar2,
					bipolar,
					pulsing,
					helium,
					energy,
				},
			},
		});
	};

	const updatePreset = () => {
		if (selectedPreset) {
			let newPreset = {
				...selectedPreset,
				modified: false,
				monopolar1,
				monopolar2,
				bipolar,
				helium,
				energy,
				pulsing,
			};
			setAllPresets(
				allPresets.map((preset) => {
					return preset.id === selectedPreset.id ? newPreset : preset;
				})
			);
			setSelectedPreset(newPreset);
		}
	};

	return (
		<MainContainer>
			<div style={{ position: "fixed", right: "0px" }}>
				<div className="d-flex justify-content-between align-items-center">
					<ToggleButton
						checked={showMonopolar}
						onClick={() => setShowMonopolar((prev) => !prev)}
					></ToggleButton>
					<div
						style={{ fontSize: "0.8rem", marginLeft: ".5rem" }}
						className="d-flex flex-column "
					>
						<span className="">Show</span>
						<span className="">Monopolar</span>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<ToggleButton
						checked={showCoolCoag}
						onClick={() => setShowCoolCoag((prev) => !prev)}
					></ToggleButton>
					<div
						style={{ fontSize: "0.8rem", marginLeft: ".5rem" }}
						className="d-flex flex-column "
					>
						<span className="">Show</span>
						<span className="">Cool Coag</span>
					</div>
				</div>
			</div>
			{showSave && (
				<ModalView>
					<Box style={{ width: "30rem", height: "10rem" }}>
						<div
							style={{
								width: "100%",
								height: "70%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							Preset settings have been modified.
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
									setShowSave(false);
								}}
							>
								CANCEL
							</IconButton>
							<IconButton
								style={iconBtnStl}
								color={COAG_COLOR}
								onClick={() => {
									setShowSave(false);
									updatePreset();
								}}
							>
								UPDATE PRESET
							</IconButton>
							<IconButton
								style={iconBtnStl}
								color={COAG_COLOR}
								onClick={() => {
									setShowSave(false);
									createNew();
								}}
							>
								SAVE AS NEW
							</IconButton>
						</div>
					</Box>
				</ModalView>
			)}
			<NavBar
				textAbove={
					selectedPreset
						? `${generateDisplayName(selectedPreset)}${selectedPreset.modified ? " : MODIFIED!" : ""}`
						: null
				}
				textAboveColor={
					selectedPreset?.modified ? LABEL_DISABLED : "white"
				}
				leftButtons={[
					{
						onClick: () => {},
						icon: (
							<HiOutlineChevronLeft
								size="85%"
								color="white"
							></HiOutlineChevronLeft>
						),
					},
					{
						onClick: () => {
							navigate("/menu");
						},
						icon: (
							<GiHamburgerMenu
								color="white"
								size="70%"
							></GiHamburgerMenu>
						),
					},
				]}
				rightButtons={[
					{
						onClick: () => {
							setPresetsScreenFormer("/");
							navigate("/allpresets");
						},
						icon: "star",
					},
					{
						onClick: () => {
							onSaveClick();
						},
						icon: "save",
					},
					{
						onClick: () => {
							navigate("/datalogging");
						},
						icon: "profile",
					},
					{
						onClick: () => {
							navigate("/help", {
								state: { view: VIEWS.PRESET_VIEW },
							});
						},
						icon: (
							<BsQuestion color="white" size="100%"></BsQuestion>
						),
					},
				]}
			></NavBar>
			<PresetView
				bipolar={bipolar}
				energy={energy}
				helium={helium}
				monopolar1={monopolar1}
				monopolar2={monopolar2}
				pulsing={pulsing}
				setBipolar={wrapSetter(setBipolar)}
				setEnergy={wrapSetter(setEnergy)}
				setHelium={wrapSetter(setHelium)}
				setMonopolar1={wrapSetter(setMonopolar1)}
				setMonopolar2={wrapSetter(setMonopolar2)}
				setPulsing={wrapSetter(setPulsing)}
				showCoolCoag={showCoolCoag}
				showMonopolar={showMonopolar}
			></PresetView>
		</MainContainer>
	);
}

export default ElectrosurgeryScreen;
