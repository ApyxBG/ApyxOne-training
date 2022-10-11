import { useState } from "react";
import { getMode } from "../utils/BipolarEnums";

function useBipolarController(bipolar, setBipolar) {
	const [showModal, setShowModal] = useState(false);

	const mode = getMode(bipolar.mode);

	const switchAuto = () => {
		setBipolar({ ...bipolar, isAuto: !bipolar.isAuto });
	};

	const decPower = () => {
		let rounded = Math.floor(bipolar.power / 5);
		let diff = bipolar.power / 5 - rounded;
		setPower(diff > 0 ? rounded * 5 : bipolar.power - 5);
	};

	const incPower = () => {
		let rounded = Math.floor(bipolar.power / 5);
		let diff = bipolar.power / 5 - rounded;
		setPower(diff > 0 ? rounded * 5 + 5 : bipolar.power + 5);
	};

	const mySetBipolar = (newBipolar) => {
		setShowModal(false);
		setBipolar(newBipolar);
	};

	const setPower = (power) => {
		if (power > mode.range.max) {
			power = mode.range.max;
		} else if (power < mode.range.min) {
			power = mode.range.min;
		}
		setBipolar({ ...bipolar, power });
	};
	return {
		bipolar,
		setBipolar: mySetBipolar,
		isAuto: bipolar.isAuto,
		switchAuto,
		showModal,
		onShowModal: () => setShowModal(true),
		decPower,
		incPower,
	};
}

export default useBipolarController;
