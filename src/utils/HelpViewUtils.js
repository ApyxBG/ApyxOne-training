import { CircleButton, IconButton } from "../styles/Common";
import PencilIcon from "../public/images/pencil.svg";
import TrashCan from "../public/images/trashcan.png";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { HiPlus } from "@react-icons/all-files/hi/HiPlus";
import { Box } from "../styles/Card";
import { Preset } from "../components/PresetsListComponent";
import { BodyParts } from "./BodyEnums";
import FrontBodyComponent from "../components/FrontBodyComponent";
import { COAG_COLOR } from "./Colors";
import SwitchButton from "../views/SwitchButton";
import presetname from "../public/images/helpview/presetname.png";
import pinpoint from "../public/images/helpview/pinpoint.png";
import body from "../public/images/helpview/body.png";
import yesno from "../public/images/helpview/yesno.png";
import data from "../public/images/helpview/data.png";
import pulsing from "../public/images/helpview/pulsing.png";
import kjmax from "../public/images/helpview/kjmax.png";
import nrgdelivered from "../public/images/helpview/nrgdelivered.png";
import presets from "../public/images/helpview/presets.png";
import gear from "../public/images/helpview/gear.png";
import profile from "../public/images/helpview/profile.png";
import status from "../public/images/helpview/status.png";
import service from "../public/images/helpview/service.png";
import wifi from "../public/images/helpview/wifi.png";
import update from "../public/images/helpview/update.png";
import spray from "../public/images/helpview/spray.png";
import lmin from "../public/images/helpview/lmin.png";
import w240 from "../public/images/helpview/240.png";
import helium from "../public/images/helpview/helium.png";
import enums from "../public/images/helpview/enums.png";
import currentstatus from "../public/images/helpview/currentstatus.png";
import tankdata from "../public/images/helpview/tankdata.png";
import clock from "../public/images/helpview/clock.png";
import incbuttons from "../public/images/helpview/incbuttons.png";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import getIcon from "../styles/Icons";
import WTF from "../styles/Icons/WTF";

export const VIEWS = {
	CREATE_PRESET: "CreatePreset",
	ALL_PRESETS: "AllPresets",
	MENU: "Menu",
	PRESET_VIEW: "PresetView",
	GENERATOR_SETINGS: "GeneratorSettings"
};

const btnSizeStl = { width: "2.5rem", height: "2.5rem" };

export function getRows(view) {
	switch (view) {
		case VIEWS.ALL_PRESETS:
			return {
				title: "Create/Edit Preset Screen - Basic Controls",
				arr: [
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								<HiOutlineChevronLeft
									size="85%"
									color="white"
								></HiOutlineChevronLeft>
							</CircleButton>
						),
						desc: "Go Back - Press this icon in case you want to go back whithout loading the currently selected preset values.",
					},
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								<HiPlus color="white" size="85%"></HiPlus>
							</CircleButton>
						),
						desc: "Add Preset - Allows users to CREATE a new preset.",
					},
					{
						img: (
							<CircleButton
								bg={COAG_COLOR}
								style={{ padding: "0.5rem", ...btnSizeStl }}
							>
								<img alt="" width="100%" src={PencilIcon}></img>
							</CircleButton>
						),
						desc: "Edit Preset - Allows users to EDIT the selected preset.",
					},
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									padding: "0.5rem",
									...btnSizeStl,
								}}
							>
								<img
									alt=""
									width="auto"
									height="100%"
									src={TrashCan}
								></img>
							</CircleButton>
						),
						desc: "Delete Preset - Allows users to DELETE the selected preset.",
					},
					{
						img: (
							<Box
								style={{
									height: "3rem",
									width: "8rem",
									fontSize: "0.8rem",
									backgroundColor: "rgb(23, 34, 56)",
									textAlign: "center",
								}}
							>
								<Preset
									preset={{
										bodyPart: { part: BodyParts.NECK },
										name: "Preset: N. Stark",
									}}
									selected={true}
								></Preset>
							</Box>
						),
						desc: "Preset Box - touch the item to select a preset. The user can swipe the list or use the vertical slider next to it to browse the items.",
					},
					{
						img: (
							<div
								style={{
									position: "relative",
									height: "20rem",
									width: "100%",
								}}
							>
								<div
									style={{
										position: "absolute",
										top: 0,
										left: 0,
									}}
									className="h-100 w-100 d-flex justify-content-center"
								>
									<FrontBodyComponent
										selectedPart={BodyParts.NECK}
									></FrontBodyComponent>
								</div>
							</div>
						),
						desc: "Body Image - show to which body part the selected preset is assigned to. The user can touch on the body part to filter the presets associated to it. Touching the head opens a detailed face image where the user can select the correspondent zone.",
					},
					{
						img: (
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
										color: "#405A93",
									}}
								>
									Back
								</span>
								<SwitchButton checked={true}></SwitchButton>
								<span
									style={{
										color: "inherit",
									}}
								>
									Front
								</span>
							</div>
						),
						desc: "Front/Back body Image switch - Allows users to switch between front and back body images",
					},
					{
						img: (
							<IconButton
								style={{
									width: "80%",
									height: "2rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									alignSelf: "center",
									justifySelf: "center",
								}}
								color={COAG_COLOR}
							>
								Load Preset
							</IconButton>
						),
						desc: "Load Preset Button - Loads currently selected preset values.",
					},
				],
			};
		case VIEWS.CREATE_PRESET:
			return {
				title: "Create/Edit Preset Screen - Basic Controls",
				arr: [
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								<HiOutlineChevronLeft
									size="85%"
									color="white"
								></HiOutlineChevronLeft>
							</CircleButton>
						),
						desc: "Go Back - Press this icon in case you want to go back whithout loading the currently selected preset values.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "1rem",
								}}
								width="80%"
								height="auto"
								src={presetname}
							></img>
						),
						desc: "Press any Body Part ot Name field on the screen to enter the desired string.",
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={pinpoint}
							></img>
						),
						desc: "Press any setting number (or mode if available) on the screen to open a popup keyboard to directly enter the desired value.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "1rem",
								}}
								width="80%"
								height="auto"
								src={body}
							></img>
						),
						desc: "Body Image - show to which body part the selected preset will be assigned to. Please touch the body part to select it. Touching the head opens a detailed face image where the user can select the correspondent zone. It is NOT possible to save a preset without a body zone associated.",
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={yesno}
							></img>
						),
						desc: "On/Off button - Slide this button to enable/disable features.",
					},
					{
						img: (
							<IconButton
								style={{
									width: "80%",
									height: "2rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									alignSelf: "center",
									justifySelf: "center",
								}}
								color={COAG_COLOR}
							>
								SAVE
							</IconButton>
						),
						desc: "Save Button - Press to save the Preset parameters in the non-volatile memory.",
					},
				],
			};
		case VIEWS.MENU:
			return {
				title: "Menu Screen - Basic Controls",
				arr: [
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								<HiOutlineChevronLeft
									size="85%"
									color="white"
								></HiOutlineChevronLeft>
							</CircleButton>
						),
						desc: "Go Back - Press this icon in case you want to go back to the previous screen.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={presets}
							></img>
						),
						desc: "Load or modify Preset configurations saved on this generator.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={profile}
							></img>
						),
						desc: "Change generator language, screen brightness, volume, & edit welcome screen.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={gear}
							></img>
						),
						desc: "View or modify gas settings or auto-bipolar mode settings.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={wifi}
							></img>
						),
						desc: "Remote Service screen.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={data}
							></img>
						),
						desc: "Allows users to enter information related to patient and procedure.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={status}
							></img>
						),
						desc: "View status of generator, plasma handpiece, Accessories, NEM/Auto-bipolar Impedance, or Gas Tank Pressure.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={service}
							></img>
						),
						desc: "Apyx authorized personal only password protected screen.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="40%"
								height="auto"
								src={update}
							></img>
						),
						desc: "Update generator firmware using UBS or remote update. Red dot signifies there is an update available.",
					},
				],
			};
		case VIEWS.PRESET_VIEW:
			return {
				title: "Main Generator Screen - Basic Controls",
				arr: [
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								<GiHamburgerMenu
									color="white"
									size="70%"
								></GiHamburgerMenu>
							</CircleButton>
						),
						desc: "Press Menu to enter the Generator Menu Screen. If a red dot is shown, then a potential generator update is available.",
					},
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								{getIcon("star", "#fff", "28px", "25px")}
							</CircleButton>
						),
						desc: "Favorites - Allows users to select a preset.",
					},
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								{getIcon("save", "#fff", "28px", "25px")}
							</CircleButton>
						),
						desc: "Save - Allows users to create a preset using the current settings.",
					},
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								{getIcon("profile", "#fff", "28px", "25px")}
							</CircleButton>
						),
						desc: "Information - Allows user to log information related to the patient and procedure.",
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={spray}
							></img>
						),
						desc: "Press any highlighted mode button to change to different mdoe for the selected handpiece."
					},
					{
						img: (
							<img
								alt=""
								width="60%"
								height="auto"
								src={incbuttons}
							></img>
						),
						desc: "Press any up or down arrow on the screen to change the selected mode output. Press once to change the increments of 1 or press and hold to scroll continuously."
					},
					{
						img: (
							<img
								alt=""
								width="70%"
								height="auto"
								src={w240}
							></img>
						),
						desc: "Press any setting number on the screen to open a popup keyboard to directly enter the desired value."
					},
					{
						img: (
							<img
								alt=""
								width="15%"
								height="auto"
								src={helium}
							></img>
						),
						desc: "Helium Gas Level - Displays the current tank volume."
					},
					{
						img: (
							<img
								alt=""
								width="70%"
								height="auto"
								src={lmin}
							></img>
						),
						desc: "The gaxs flow rate can be adjusted in steps of 0.5 L/min from 1.0 to 5.0 L/min"
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={yesno}
							></img>
						),
						desc: "On/Off button - Slide this button to enable/disable features.",
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={nrgdelivered}
							></img>
						),
						desc: "Energy Counter - When turned on the screen displays the total energy delivered in kj. The user can reset the value at any time pressing the reset icon.",
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={kjmax}
							></img>
						),
						desc: "Energy Limit - When turned on the user can set the preset energy value alaram. The energy counter must be turned on to use this feature. The user can reset the value at any time pressing the reset icon.",
					},
					{
						img: (
							<img
								alt=""
								width="80%"
								height="auto"
								src={pulsing}
							></img>
						),
						desc: "Energy pulsing - Allows the user the ability to pulse the plasma output power on and off. Both on and off pulse settings are adjustable from 0 to 999.",
					},
					{
						img: (
							<img
								alt=""
								width="60%"
								height="auto"
								src={clock}
							></img>
						),
						desc: "Handpiece Timeout Clock - Shows the amount of time left before the handpiece times out.",
					},
					{
						img: (
							<WTF width="1.5rem" height="0.9rem"></WTF>
						),
						desc: "Grounding Pad Icons - Identifies the Grounding pad plugged in and its type (split or solid).",
					},
				],
			};
		case VIEWS.GENERATOR_SETINGS:
			return {
				title: "Generator Settings Screen - Basic Controls",
				arr: [
					{
						img: (
							<CircleButton
								bg="transparent"
								style={{
									border: "0.1rem solid rgb(23, 34, 56)",
									...btnSizeStl,
								}}
							>
								<HiOutlineChevronLeft
									size="85%"
									color="white"
								></HiOutlineChevronLeft>
							</CircleButton>
						),
						desc: "Go Back - Press this icon in case you want to go back to the previous screen discarding the changes.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="60%"
								height="auto"
								src={tankdata}
							></img>
						),
						desc: "Press pencil icon to edit tank volume or maximum pressure information. This may change the estimates gas tank time left value displayed on this screen.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="70%"
								height="auto"
								src={currentstatus}
							></img>
						),
						desc: "Tank/Input pressure represent the real values measured by the sensors and cannot be edited. The Tank pressure is available only if there is High Pressure sensor connected to the regulator.",
					},
					{
						img: (
							<img
								alt=""
								style={{
									border: "1px solid black",
									borderRadius: "0.3rem",
								}}
								width="70%"
								height="auto"
								src={enums}
							></img>
						),
						desc: "Press any Preset Tank Data button to load the preset values of the Tank Volume & MAx. Pressure from the table. Press Unknown button in case you do not know the size of the tank you use (in this case the Estimate Gas Tank Time Left calculation will not be possible).",
					},
					{
						img: (
							<IconButton
								style={{
									width: "80%",
									height: "2rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									alignSelf: "center",
									justifySelf: "center",
								}}
								color={COAG_COLOR}
							>
								APPLY
							</IconButton>
						),
						desc: "APPLY - Press this icon in case you want to go back to the previous screen saving the current selections.",
					},
				]
			}
		default:
			return null;
	}
}
