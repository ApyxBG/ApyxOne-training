import React from "react";
import { BodyParts } from "../utils/BodyEnums";
import FaceView from "../views/FaceView";

function FaceComponent({ goBack, selectedPart, setSelectedPart }) {
	return (
		<FaceView
			goBack={goBack}
			cheeksSelected={BodyParts.CHEEKS === selectedPart}
			foreheadSelected={BodyParts.FOREHEAD === selectedPart}
			jawlineSelected={BodyParts.JAWLINE === selectedPart}
			noseSelected={BodyParts.NOSE === selectedPart}
			perioralSelected={BodyParts.PERIORAL === selectedPart}
			periorbitalSelected={BodyParts.PERIORBITAL === selectedPart}
			onCheeksClicked={() => {
				setSelectedPart(BodyParts.CHEEKS);
			}}
			onForeheadClicked={() => {
				setSelectedPart(BodyParts.FOREHEAD);
			}}
			onJawlineClicked={() => {
				setSelectedPart(BodyParts.JAWLINE);
			}}
			onNoseClicked={() => {
				setSelectedPart(BodyParts.NOSE);
			}}
			onPerioralClicked={() => {
				setSelectedPart(BodyParts.PERIORAL);
			}}
			onPeriorbitalClicked={() => {
				setSelectedPart(BodyParts.PERIORBITAL);
			}}
		></FaceView>
	);
}

export default FaceComponent;
