import { BsQuestion } from "@react-icons/all-files/bs/BsQuestion";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/common/MainContainer";
import { Box, Title, Content } from "../styles/Card";
import { TITLE_COLOR } from "../utils/Colors";
import NavBar from "../views/NavBar";
import data from "../public/images/menu/data.png";
import presets from "../public/images/menu/presets.png";
import gear from "../public/images/menu/gear.png";
import profile from "../public/images/menu/profile.png";
import status from "../public/images/menu/status.png";
import service from "../public/images/menu/service.png";
import wifi from "../public/images/menu/wifi.png";
import update from "../public/images/menu/update.png";
import { VIEWS } from "../utils/HelpViewUtils";

function MenuScreen() {
	const navigate = useNavigate();
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
				title="Menu"
				rightButtons={[
					{
						onClick: () => {
							navigate("/help", {
								state: { view: VIEWS.MENU },
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
					gridTemplateColumns: "repeat(4,1fr)",
					gridTemplateRows: "1fr 1fr",
					height: "70%",
					gridGap: "2rem",
					marginTop: "3rem"
				}}
			>
				<Box
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/datalogging")}
				>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={data} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Data Logging</Title>
				</Box>
				<Box
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/allpresets")}
				>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={presets} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Presets</Title>
				</Box>
				<Box
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/generatorsettings")}
				>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={gear} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Generator Settings</Title>
				</Box>
				<Box
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/displaysettings")}
				>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={profile} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Display Settings</Title>
				</Box>
				<Box
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/status")}
				>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={status} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Status</Title>
				</Box>
				<Box>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={service} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Service</Title>
				</Box>
				<Box
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/remoteservice")}
				>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={wifi} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Remote Service</Title>
				</Box>
				<Box>
					<Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img alt="" src={update} height="50%" width="auto"></img></Content>
					<Title color={TITLE_COLOR}>Update</Title>
				</Box>
			</div>
		</MainContainer>
	);
}

export default MenuScreen;
