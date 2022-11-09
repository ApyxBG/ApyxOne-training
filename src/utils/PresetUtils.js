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
				mode: CoagModes.SPRAY.id,
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
				mode: CoagModes.SPRAY.id,
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
				mode: CoagModes.SPRAY.id,
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
			range: {min: 0, max: 999},
			enabled: false,
			onTime: 800,
			offTime: 800,
		},
	};
}

export function generateDisplayName(preset) {
	if (typeof preset.bodyPart.name === 'string') {
		return `${preset.bodyPart.name} - ${preset.name || ''}`;
	} else {
		return `${preset.bodyPart.part} - ${preset.name || ''}`;
	}
}
