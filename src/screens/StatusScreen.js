import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/common/MainContainer";
import NavBar from "../views/NavBar";
import { Box } from "../styles/Card";
import Enum from "../styles/Enum";
import GeneratorStatusView from "../views/GeneratorStatusView";
import AccessoriesStatusView from "../views/AccessoriesStatusView";
import GasTankPressureView from "../views/GasTankPressureView";
import NEMView from "../views/NEMView";
import PlasmaHandpieceStatusView from "../views/PlasmaHandpieceStatusView";
import { COAG_COLOR } from "../utils/Colors";

const VIEWS = { GS: "GS", PHS: "PHS", AS: "AS", NEM: "NEM", GTP: "GTP" };
const enumStl = {
	display: "flex",
	width: "100%",
	justifyContent: "center",
	position: "relative",
};
const enumWrapperStl = { width: "60%", height: "4rem" };
const arrowStl = {
	height: "4rem",
	width: "15%",
	position: "absolute",
	right: "2.5%",
	display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
function StatusScreen() {
	const navigate = useNavigate();
	const [view, setView] = useState(VIEWS.GS);
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
				title="Status"
			></NavBar>
			<Box style={{ display: "flex", height: "95%" }}>
				<div
					style={{
						height: "100%",
						width: "40%",
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "column",
						alignItems: "center",
						paddingTop: "4rem",
						paddingBottom: "4rem",
						position: "relative",
					}}
				>
					<div style={enumStl}>
						<Enum.Wrapper
							isSelected={view === VIEWS.GS}
							color={COAG_COLOR}
							style={enumWrapperStl}
							onClick={() => setView(VIEWS.GS)}
						>
							<Enum.Text>Generator Status</Enum.Text>
						</Enum.Wrapper>
						<div style={arrowStl}>
							{view === VIEWS.GS && (
								<HiOutlineChevronRight
									size="70%"
									color={COAG_COLOR}
								></HiOutlineChevronRight>
							)}
						</div>
					</div>
					<div style={enumStl}>
						<Enum.Wrapper
							isSelected={view === VIEWS.PHS}
							color={COAG_COLOR}
							style={enumWrapperStl}
							onClick={() => setView(VIEWS.PHS)}
						>
							<Enum.Text>Plasma Handpiece Status</Enum.Text>
						</Enum.Wrapper>
						<div style={arrowStl}>
							{view === VIEWS.PHS && (
								<HiOutlineChevronRight
									size="70%"
									color={COAG_COLOR}
								></HiOutlineChevronRight>
							)}
						</div>
					</div>
					<div style={enumStl}>
						<Enum.Wrapper
							isSelected={view === VIEWS.AS}
							color={COAG_COLOR}
							style={enumWrapperStl}
							onClick={() => setView(VIEWS.AS)}
						>
							<Enum.Text>Accessories Status</Enum.Text>
						</Enum.Wrapper>
						<div style={arrowStl}>
							{view === VIEWS.AS && (
								<HiOutlineChevronRight
									size="70%"
									color={COAG_COLOR}
								></HiOutlineChevronRight>
							)}
						</div>
					</div>
					<div style={enumStl}>
						<Enum.Wrapper
							isSelected={view === VIEWS.NEM}
							color={COAG_COLOR}
							style={enumWrapperStl}
							onClick={() => setView(VIEWS.NEM)}
						>
							<Enum.Text>NEM/Auto-bipolar Impedance</Enum.Text>
						</Enum.Wrapper>
						<div style={arrowStl}>
							{view === VIEWS.NEM && (
								<HiOutlineChevronRight
									size="70%"
									color={COAG_COLOR}
								></HiOutlineChevronRight>
							)}
						</div>
					</div>
					<div style={enumStl}>
						<Enum.Wrapper
							isSelected={view === VIEWS.GTP}
							color={COAG_COLOR}
							style={enumWrapperStl}
							onClick={() => setView(VIEWS.GTP)}
						>
							<Enum.Text>Gas Tank Pressure</Enum.Text>
						</Enum.Wrapper>
						<div style={arrowStl}>
							{view === VIEWS.GTP && (
								<HiOutlineChevronRight
									size="70%"
									color={COAG_COLOR}
								></HiOutlineChevronRight>
							)}
						</div>
					</div>
				</div>
				<div style={{ height: "100%", width: "60%" }}>
					{view === VIEWS.GS && (
						<GeneratorStatusView></GeneratorStatusView>
					)}
					{view === VIEWS.AS && (
						<AccessoriesStatusView></AccessoriesStatusView>
					)}
					{view === VIEWS.GTP && (
						<GasTankPressureView></GasTankPressureView>
					)}
					{view === VIEWS.NEM && <NEMView></NEMView>}
					{view === VIEWS.PHS && (
						<PlasmaHandpieceStatusView></PlasmaHandpieceStatusView>
					)}
				</div>
			</Box>
		</MainContainer>
	);
}

export default StatusScreen;
