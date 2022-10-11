import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const Line1 = atom({
	key: "WelcomeScreen.Line1",
	default: "Welcome Line 1",
	effects_UNSTABLE: [persistAtom],
});

export const Line2 = atom({
	key: "WelcomeScreen.Line2",
	default: "Welcome message Line 2",
	effects_UNSTABLE: [persistAtom],
});
