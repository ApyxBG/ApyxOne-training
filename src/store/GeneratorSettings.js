import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const PresetTankData = {
    L10: { label: "10 L", volume: 10, pressure: 150, cubic: false },
    L20: { label: "20 L", volume: 20, pressure: 150, cubic: false },
    M31: { label: "1.0 m", volume: 6.7, pressure: 150, cubic: true },
    M32: { label: "2.0 m", volume: 13.3, pressure: 150, cubic: true },
    M317: { label: "1.7 m", volume: 11.3, pressure: 150, cubic: true },
    M312: { label: "1.2 m", volume: 8, pressure: 150, cubic: true },
    FT20: { label: "20 ft", volume: 3.8, pressure: 150, cubic: true },
    FT40: { label: "40 ft", volume: 7.6, pressure: 150, cubic: true },
    FT60: { label: "60 ft", volume: 11.3, pressure: 150, cubic: true },
    UNKNOWN: { label: "Unknown", volume: 0.1, pressure: 150, cubic: true },
}
export const TankVolume = atom({
    key: "GeneratorSettings.HeliumGas",
    default: {
        volume: 0,
        pressure: 150,
        preset: null
    },
    effects_UNSTABLE: [persistAtom]
})