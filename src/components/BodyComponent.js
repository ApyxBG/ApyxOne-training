import React, { useState } from "react";
import { Groups } from "../utils/BodyEnums";
import BodyView from "../views/BodyView";

function BodyComponent({part, group, setPart}) {
	const [faceSelected, setFaceSelected] = useState(group === Groups.FACE);

	return (
		<BodyView
			closeFace={() => {
				setFaceSelected(false);
				if (group === Groups.FACE) {
					setPart(null, null);
				}
			}}
			facePart={part}
			setFacePart={(part) => {
				setPart(part, Groups.FACE);
			}}
			frontPart={group === Groups.FRONT ? part : null}
			setFrontPart={(part) => {
				setPart(part, Groups.FRONT);
			}}
			backPart={group === Groups.BACK ? part : null}
			setBackPart={(part) => {
				setPart(part, Groups.BACK);
			}}
			faceSelected={faceSelected}
			onFaceClicked={() => { setFaceSelected(true);  setPart(null, null)}}
		></BodyView>
	);
}

export default BodyComponent;
