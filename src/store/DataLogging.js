import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const PatientInfo = atom({
    key: "DataLogging.PatientInfo",
    default: {
        reference: "",
        age: 0,
        sex: null,
        height: 0,
        weight: 0,
        metric: true
    },
    effects_UNSTABLE: [persistAtom]
});

export const ProcedureInfo = atom({
    key: "DataLogging.ProcedureInfo",
    default: {
        type: "",
        concProducts: "",
        concProcedures: "",
        otherInfo: "",
        tumVolume: 0,
        aspirationVolume: 0
    },
    effects_UNSTABLE: [persistAtom]
});