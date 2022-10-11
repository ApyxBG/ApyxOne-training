import { CoagModes, CutModes } from "./MonopolarEnums";
import { Modes as BipolarModes } from "./BipolarEnums";

export function createDefaultPreset() {
	return {
		bodyPart: {
			part: null,
			group: null
		},
		monopolar1: {
			cut: {
				mode: CutModes.CUT1.id,
				power: 0,
				units: "w",
			},
			coag: {
				mode: CoagModes.SPAY.id,
				power: 0,
				units: "w",
			},
		},
		monopolar2: {
			cut: {
				mode: CutModes.CUT1.id,
				power: 0,
				units: "w",
			},
			coag: {
				mode: CoagModes.SPAY.id,
				power: 0,
				units: "w",
			},
		},
		bipolar: {
			mode: BipolarModes.MACRO.id,
			power: 0,
			units: "w",
			isAuto: false,
		},
		helium: {
			renuvion: 0,
			coolCoag: {
				mode: CoagModes.SPAY.id,
				power: 0,
				units: "w",
			},
			flow: 1,
		},
		energy: {
			counter: {
				enabled: false,
				value: 0,
			},
			limit: {
				enabled: false,
				value: 0,
			},
		},
		pulsing: {
			enabled: false,
			onTime: 800,
			offTime: 800,
		},
	};
}
