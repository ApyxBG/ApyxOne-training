import React from 'react';
import BackBodyView from '../views/BackBodyView';
import { BodyParts } from "../utils/BodyEnums";

function BackBodyComponent({ selectedPart, setSelectedPart }) {
	return (
		<BackBodyView
			backSelected={BodyParts.BACK === selectedPart}
			buttocksSelected={BodyParts.BUTTOCKS === selectedPart}
			forearmsSelected={BodyParts.FOREARMS === selectedPart}
			lowerLegsSelected={BodyParts.LOWER_LEGS === selectedPart}
			upperArmsSelected={BodyParts.UPPER_ARMS === selectedPart}
			upperLegsSelected={BodyParts.UPPER_LEGS === selectedPart}
			onBackClicked={() => {
				setSelectedPart(BodyParts.BACK);
			}}
			onForearmsClicked={() => {
				setSelectedPart(BodyParts.FOREARMS);
			}}
			onButtocksClicked={() => {
				setSelectedPart(BodyParts.BUTTOCKS);
			}}
			onLowerLegsClicked={() => {
				setSelectedPart(BodyParts.LOWER_LEGS);
			}}
			onUpperArmsClicked={() => {
				setSelectedPart(BodyParts.UPPER_ARMS);
			}}
			onUpperLegsClicked={() => {
				setSelectedPart(BodyParts.UPPER_LEGS);
			}}
		></BackBodyView>
	);
}

export default BackBodyComponent;