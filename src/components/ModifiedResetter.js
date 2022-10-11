import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { SelectedPreset } from "../store/Preset";

function ModifiedResetter({ children }) {
	const [selectedPreset, setSelectedPreset] = useRecoilState(SelectedPreset);
	useEffect(() => {
		if (selectedPreset && selectedPreset.modified) {
			setSelectedPreset({ ...selectedPreset, modified: false });
		}
	}, []);
	return <>{children}</>;
}

export default ModifiedResetter;
