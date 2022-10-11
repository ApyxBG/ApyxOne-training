import React from "react";
import { BodyParts } from "../utils/BodyEnums";
import FrontBodyView from "../views/FrontBodyView";

function FrontBodyComponent({ selectedPart, setSelectedPart, onHeadClicked }) {
	return (
		<FrontBodyView
			abdomenSelected={BodyParts.ABDOMEN === selectedPart}
			chestSelected={BodyParts.CHEST === selectedPart}
			groinSelected={BodyParts.GROIN === selectedPart}
			forearmsSelected={BodyParts.FOREARMS === selectedPart}
			lowerLegsSelected={BodyParts.LOWER_LEGS === selectedPart}
			neckSelected={BodyParts.NECK === selectedPart}
			upperArmsSelected={BodyParts.UPPER_ARMS === selectedPart}
			upperLegsSelected={BodyParts.UPPER_LEGS === selectedPart}
			onAbdomenClicked={() => {
				setSelectedPart(BodyParts.ABDOMEN);
			}}
			onChestClicked={() => {
				setSelectedPart(BodyParts.CHEST);
			}}
			onForearmsClicked={() => {
				setSelectedPart(BodyParts.FOREARMS);
			}}
			onGroinClicked={() => {
				setSelectedPart(BodyParts.GROIN);
			}}
			onHeadClicked={() => {
				onHeadClicked();
			}}
			onLowerLegsClicked={() => {
				setSelectedPart(BodyParts.LOWER_LEGS);
			}}
			onNeckClicked={() => {
				setSelectedPart(BodyParts.NECK);
			}}
			onUpperArmsClicked={() => {
				setSelectedPart(BodyParts.UPPER_ARMS);
			}}
			onUpperLegsClicked={() => {
				setSelectedPart(BodyParts.UPPER_LEGS);
			}}
		></FrontBodyView>
	);
}

export default FrontBodyComponent;
