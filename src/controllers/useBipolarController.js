import { useState } from "react";
import { getMode } from "../utils/BipolarEnums";

function useBipolarController(bipolar, setBipolar) {
	const [showModal, setShowModal] = useState(false);

	const mode = getMode(bipolar.mode);

	const switchAuto = () => {
		setBipolar({ ...bipolar, isAuto: !bipolar.isAuto });
	};

	const decPower = () => {
		setBipolar((prev) => {
			let bipolar = prev;
			let rounded = Math.floor(bipolar.power / 5);
			let diff = bipolar.power / 5 - rounded;
			return setPower(diff > 0 ? rounded * 5 : bipolar.power - 5, bipolar);
		})
	};

	const incPower = () => {
		setBipolar((prev) => {
			let bipolar = prev
			let rounded = Math.floor(bipolar.power / 5);
			let diff = bipolar.power / 5 - rounded;
			return setPower(diff > 0 ? rounded * 5 + 5 : bipolar.power + 5, bipolar);
		});
	};

	const mySetBipolar = (newBipolar) => {
		setShowModal(false);
		setBipolar(newBipolar);
	};

	const setPower = (power, bipolar) => {
		if (power > mode.range.max) {
			power = mode.range.max;
		} else if (power < mode.range.min) {
			power = mode.range.min;
		}
		return { ...bipolar, power };
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
