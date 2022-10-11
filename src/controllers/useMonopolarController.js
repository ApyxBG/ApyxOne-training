import { useState } from "react";
import { getCoagMode, getCutMode } from "../utils/MonopolarEnums";

function useMonopolarController(monopolar, setMonopolar) {
	const { cut, coag } = monopolar;

	const cutMode = getCutMode(cut.mode);
	const coagMode = getCoagMode(coag.mode);

	const incCut = () => {
		let rounded = Math.floor(cut.power / 5);
		let diff = cut.power / 5 - rounded;
		setCutPower(diff > 0 ? rounded * 5 + 5 : cut.power + 5);
	};

	const decCut = () => {
		let rounded = Math.floor(cut.power / 5);
		let diff = cut.power / 5 - rounded;
		setCutPower(diff > 0 ? rounded * 5 : cut.power - 5);
	};

	const setCutPower = (power) => {
		if (power > cutMode.range.max) {
			power = cutMode.range.max;
		} else if (power < cutMode.range.min) {
			power = cutMode.range.min;
		}
		setMonopolar({
			...monopolar,
			cut: { ...cut, power },
		});
	};

	const incCoag = () => {
		let rounded = Math.floor(coag.power / 5);
		let diff = coag.power / 5 - rounded;
		setCoagPower(diff > 0 ? rounded * 5 + 5 : coag.power + 5);
	};

	const decCoag = () => {
		let rounded = Math.floor(coag.power / 5);
		let diff = coag.power / 5 - rounded;
		setCoagPower(diff > 0 ? rounded * 5 : coag.power - 5);
	};

	const setCoagPower = (power) => {
		if (power > coagMode.range.max) {
			power = coagMode.range.max;
		} else if (power < coagMode.range.min) {
			power = coagMode.range.min;
		}
		setMonopolar({ ...monopolar, coag: { ...coag, power } });
	};

	const [showCutModal, setShowCutModal] = useState(false);
	const [showCoagModal, setShowCoagModal] = useState(false);
	const onShowCutModal = () => {
		setShowCutModal(true);
	};
	const onShowCoagModal = () => {
		setShowCoagModal(true);
	};

	const setCoag = (newCoag) => {
		//TODO: add change check to avoid rerenders
		setShowCoagModal(false);
		setMonopolar({
			...monopolar,
			coag: newCoag,
		});
	};
	const setCut = (newCut) => {
		//TODO: add change check to avoid rerenders
		setShowCutModal(false);
		setMonopolar({
			...monopolar,
			cut: newCut,
		});
	};
	return {
		showCoagModal,
		showCutModal,
		cut,
		incCut,
		decCut,
		coag,
		incCoag,
		decCoag,
		onShowCoagModal,
		onShowCutModal,
		setCoag,
		setCut,
	};
}

export default useMonopolarController;
