import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CoagModes, CutModes } from "../utils/MonopolarEnums";
import { Modes as BipolarModes } from "../utils/BipolarEnums";

const { persistAtom } = recoilPersist();

export const SelectedPreset = atom({
    key: "SelectedPreset",
    default: null,
    effects_UNSTABLE: [persistAtom]
});


export const AllPresets = atom({
    key: "AllPresets",
    default: [],
    effects_UNSTABLE: [persistAtom]
});

export const Monopolar1 = atom({
    key: "Monopolar1",
    default: {
        cut: {
            mode: CutModes.CUT1.id,
            power: 0,
            units: "w",
        },
        coag: {
            mode: CoagModes.SPRAY.id,
            power: 0,
            units: "w",
        }
    }
});

export const Monopolar2 = atom({
    key: "Monopolar2",
    default: {
        cut: {
            mode: CutModes.CUT1.id,
            power: 0,
            units: "w",
        },
        coag: {
            mode: CoagModes.SPRAY.id,
            power: 0,
            units: "w",
        }
    }
});

export const Bipolar = atom({
    key: "Bipolar",
    default: {
        mode: BipolarModes.MACRO.id,
        power: 0,
        units: "w",
        isAuto: false
    }
});

export const Helium = atom({
    key: "Helium",
    default: {
        renuvion: 0,
        coolCoag: {
            mode: CoagModes.SPRAY.id,
            power: 0,
            units: "w",
        },
        flow: 0
    }
});

export const Energy = atom({
    key: "Energy",
    default: {
        counter: {
            enabled: false,
            value: 0
        },
        limit: {
            enabled: false,
            value: 0
        }
    }
});

export const Pulsing = atom({
    key: "Pulsing",
    default: {
        enabled: false,
        onTime: 800,
        offTime: 800,
        range: {min: 0, max: 999}
    }
})