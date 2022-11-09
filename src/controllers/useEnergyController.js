import { useState } from "react";

function useEnergyController(energy, setEnergy) {
	const [showLimitModal, setShowLimitModal] = useState(false);

	const setLimit = (value) => {
		setEnergy({ ...energy, limit: { ...energy.limit, value } });
		setShowLimitModal(false);
	};
	const switchCounterEnabled = () => {
		setEnergy({
			...energy,
			counter: { ...energy.counter, enabled: !energy.counter.enabled },
			limit: {
				...energy.limit,
				enabled: !energy.counter.enabled && energy.limit.enabled,
			},
		});
	};
	const incLimit = () => {
		setEnergy((prev) => {
			if (!energy.limit.enabled) {
				return prev;
			} else {
				let energy = prev;
				let limit = energy.limit.value * 10;
				let rounded = Math.floor(limit / 5);
				let diff = limit / 5 - rounded;
				let value = diff > 0 ? rounded * 5 + 5 : limit + 5;
				value /= 10;
				if (value > 10) {
					value = 10;
				}
				return { ...energy, limit: { ...energy.limit, value } };
			}
		});
	};
	const decLimit = () => {
		setEnergy((prev) => {
			if (!energy.limit.enabled) {
				return prev;
			} else {
				let energy = prev;
				let limit = energy.limit.value * 10;
				let rounded = Math.floor(limit / 5);
				let diff = limit / 5 - rounded;
				let value = diff > 0 ? rounded * 5 : limit - 5;
				value /= 10;
				if (value < 0) {
					value = 0;
				}
				return { ...energy, limit: { ...energy.limit, value } };
			}
		});
	};
	
	const switchLimitEnabled = () => {
		if (energy.counter.enabled) {
			setEnergy({
				...energy,
				limit: { ...energy.limit, enabled: !energy.limit.enabled },
			});
		}
	};
	return {
		counter: energy.counter,
		limit: energy.limit,
		onShowLimitModal: () => setShowLimitModal(true),
		setLimit,
		showLimitModal,
		switchCounterEnabled,
		switchLimitEnabled,
		incLimit,
		decLimit,
	};
}

export default useEnergyController;
