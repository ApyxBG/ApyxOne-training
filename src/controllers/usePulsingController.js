import { useState } from "react";

function usePulsingController(pulsing, setPulsing) {
	const [showOnTimeModal, setShowOnTimeModal] = useState(false);
	const [showOffTimeModal, setShowOffTimeModal] = useState(false);

	const setOffTime = (offTime) => {
		setPulsing({ ...pulsing, offTime });
		setShowOffTimeModal(false);
	};
	const setOnTime = (onTime) => {
		setPulsing({ ...pulsing, onTime });
		setShowOnTimeModal(false);
	};
	const switchEnabled = () => {
		setPulsing({ ...pulsing, enabled: !pulsing.enabled });
	};
	const incOnTime = () => {
		setPulsing((prev) => {
			if (!pulsing.enabled) {
				return prev;
			} else {
				let pulsing = prev;
				let rounded = Math.floor(pulsing.onTime / 5);
				let diff = pulsing.onTime / 5 - rounded;
				return {
					...pulsing,
					onTime: restrictValue(
						diff > 0 ? rounded * 5 + 5 : pulsing.onTime + 5
					),
				};
			}
		});
	};
	const decOnTime = () => {
		setPulsing((prev) => {
			if (!pulsing.enabled) {
				return prev;
			} else {
				let pulsing = prev;
				let rounded = Math.floor(pulsing.onTime / 5);
				let diff = pulsing.onTime / 5 - rounded;
				return {
					...pulsing,
					onTime: restrictValue(diff > 0 ? rounded * 5 : pulsing.onTime - 5),
				};
			}
		});
	};
	const incOffTime = () => {
		setPulsing((prev) => {
			if (!pulsing.enabled) {
				return prev;
			} else {
				let pulsing = prev;
				let rounded = Math.floor(pulsing.offTime / 5);
				let diff = pulsing.offTime / 5 - rounded;
				return {
					...pulsing,
					offTime: restrictValue(
						diff > 0 ? rounded * 5 + 5 : pulsing.offTime + 5
					),
				};
			}
		});
	};
	const decOffTime = () => {
		setPulsing((prev) => {
			if (!pulsing.enabled) {
				return prev;
			} else {
				let pulsing = prev;
				let rounded = Math.floor(pulsing.offTime / 5);
				let diff = pulsing.offTime / 5 - rounded;
				return {
					...pulsing,
					offTime: restrictValue(diff > 0 ? rounded * 5 : pulsing.offTime - 5),
				};
			}
		});
	};
	const restrictValue = (power) => {
		if (power > pulsing.range.max) {
			power = pulsing.range.max;
		} else if (power < pulsing.range.min) {
			power = pulsing.range.min;
		}
		return power;
	};
	return {
		enabled: pulsing.enabled,
		offTime: pulsing.offTime,
		onTime: pulsing.onTime,
		onShowOffTimeModal: () => {
			setShowOffTimeModal(true);
		},
		onShowOnTimeModal: () => {
			setShowOnTimeModal(true);
		},
		setOffTime,
		setOnTime,
		showOffTimeModal,
		showOnTimeModal,
		switchEnabled,
		incOnTime,
		decOnTime,
		incOffTime,
		decOffTime,
		range: pulsing.range,
	};
}

export default usePulsingController;
