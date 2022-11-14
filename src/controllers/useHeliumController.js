import { useState } from "react";
import { getCoagMode } from "../utils/MonopolarEnums";

function useHeliumController(helium, setHelium) {
	const [showRenuvionModal, setShowRenuvionModal] = useState(false);
	const [showCoagModal, setShowCoagModal] = useState(false);
	const [showFlowModal, setShowFlowModal] = useState(false);

	const { coolCoag: coag } = helium;
	const coagMode = getCoagMode(coag.mode);

	const incCoag = () => {
		setHelium((prev) => {
			let coag = prev.coolCoag;
			let rounded = Math.floor(coag.power / 5);
			let diff = coag.power / 5 - rounded;
			return setCoagPower(diff > 0 ? rounded * 5 + 5 : coag.power + 5, prev);
		});
	};

	const decCoag = () => {
		setHelium((prev) => {
			let coag = prev.coolCoag;
			let rounded = Math.floor(coag.power / 5);
			let diff = coag.power / 5 - rounded;
			return setCoagPower(diff > 0 ? rounded * 5 : coag.power - 5, prev);
		});
	};

	const setCoagPower = (power, helium) => {
		if (power > coagMode.range.max) {
			power = coagMode.range.max;
		} else if (power < coagMode.range.min) {
			power = coagMode.range.min;
		}
		return { ...helium, coolCoag: { ...helium.coolCoag, power } };
	};

	const decHeliumFlow = () => {
		setHelium((prev) => {
			let helium = prev;
			let flow = helium.flow * 10;
			if (flow <= 10) {
				return setFlowValue(flow - 1, helium);
			}
			let rounded = Math.floor(flow / 5);
			let diff = flow / 5 - rounded;
			return setFlowValue(diff > 0 ? rounded * 5 : flow - 5, helium);
		});
	};

	const incHeliumFlow = () => {
		setHelium((prev) => {
			let helium = prev;
			let flow = helium.flow * 10;
			if (flow < 10) {
				return setFlowValue(flow + 1, helium)
			}
			let rounded = Math.floor(flow / 5);
			let diff = flow / 5 - rounded;
			return setFlowValue(diff > 0 ? rounded * 5 + 5 : flow + 5, helium);
		});
	};

	const setFlowValue = (flow, helium) => {
		flow /= 10;
		if (flow > 5) {
			flow = 5;
		} else if (flow < 0) {
			flow = 0;
		}
		flow = restrictFloat(flow);
		return { ...helium, flow };
	};

	const decRenuv = () => {
		setHelium((prev) => {
			let helium = prev;
			if (helium.renuvion > 0) {
				let rounded = Math.floor(helium.renuvion / 5);
				let diff = helium.renuvion / 5 - rounded;
				return {
					...helium,
					renuvion: diff > 0 ? rounded * 5 : helium.renuvion - 5,
				};
			} else {
				return helium;
			}
		});
	};
	const incRenuv = () => {
		setHelium((prev) => {
			let helium = prev;
			if (helium.renuvion < 100) {
				let rounded = Math.floor(helium.renuvion / 5);
				let diff = helium.renuvion / 5 - rounded;
				return {
					...helium,
					renuvion: diff > 0 ? rounded * 5 + 5 : helium.renuvion + 5,
				};
			} else {
				return helium;
			}
		});
	};

	const setCoag = (newCoag) => {
		//TODO: add change check to avoid rerenders
		setShowCoagModal(false);
		setHelium({
			...helium,
			coolCoag: newCoag,
		});
	};

	const setHeliumFlow = (flow) => {
		setShowFlowModal(false);
		if (flow === 0) {
			flow = 0.1;
		}
		setHelium({
			...helium,
			flow,
		});
	};

	const setRenuvion = (renuvion) => {
		setShowRenuvionModal(false);
		setHelium({
			...helium,
			renuvion,
		});
	};
	return {
		coag,
		coolCoagTitle: "Cool Coag",
		decCoag,
		incCoag,
		decHeliumFlow,
		incHeliumFlow,
		decRenuv,
		incRenuv,
		heliumFlow: helium.flow,
		onShowCoagModal: () => setShowCoagModal(true),
		onShowFlowModal: () => setShowFlowModal(true),
		onShowRenuvionModal: () => setShowRenuvionModal(true),
		renuvion: helium.renuvion,
		renuvionTitle: "Renuvion",
		setCoolCoag: setCoag,
		setHeliumFlow,
		setRenuvion,
		showCoagModal,
		showFlowModal,
		showRenuvionModal,
	};
}

function restrictFloat(num) {
	return Math.round(num * 10) / 10;
}

export default useHeliumController;
