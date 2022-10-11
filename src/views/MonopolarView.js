import ModeSetterComponent from "../components/ModeSetterComponent";
import { Box, Content, Title } from "../styles/Card";
import {
	RegularContainer,
	UnitContainer,
	VerticalLine,
} from "../styles/Common";

import {
	allCoagModes,
	allCutModes,
	getCoagMode,
	getCutMode,
} from "../utils/MonopolarEnums";
import IncrementorButtons from "../components/common/IncrementorButtons";
import UnitsDisplay from "../components/common/UnitsDisplay";
import { COAG_COLOR, CUT_COLOR, TITLE_COLOR } from "../utils/Colors";
import IconButton from "../components/common/IconButton";

function MonopolarView({
	title,
	cut,
	incCut,
	decCut,
	showCutModal,
	onShowCutModal,
	coag,
	incCoag,
	decCoag,
	showCoagModal,
	onShowCoagModal,
	setCoag,
	setCut,
}) {
	return (
		<Box>
			{showCutModal && (
				<ModeSetterComponent
					title={title}
					obj={cut}
					setObj={setCut}
					color={CUT_COLOR}
					enumValues={allCutModes}
					getModeEnum={getCutMode}
					modeTitle="Cut Mode"
				></ModeSetterComponent>
			)}
			{showCoagModal && (
				<ModeSetterComponent
					title={title}
					obj={coag}
					setObj={setCoag}
					color={COAG_COLOR}
					enumValues={allCoagModes}
					getModeEnum={getCoagMode}
					modeTitle="Coag Mode"
				></ModeSetterComponent>
			)}
			<Title color={TITLE_COLOR}>{title}</Title>
			<Content>
				<RegularContainer>
					<div style={{ marginRight: "-10%" }} className="p-2">
						<div className="d-flex justify-content-center">
							<IconButton
								color={CUT_COLOR}
								onClick={onShowCutModal}
								icon={getCutMode(cut.mode).icon}
								label={getCutMode(cut.mode).label}
							></IconButton>
						</div>
						<UnitContainer>
							<UnitsDisplay
								action={onShowCutModal}
								num={cut.power}
								unit={cut.units}
							/>
							<IncrementorButtons
								increment={incCut}
								decrement={decCut}
							/>
						</UnitContainer>
					</div>

					<div className="d-flex">
						<VerticalLine></VerticalLine>
					</div>
					<div style={{ marginLeft: "-10%" }} className="p-2">
						<div className="d-flex justify-content-center">
							<IconButton
								color={COAG_COLOR}
								onClick={onShowCoagModal}
								icon={getCoagMode(coag.mode).icon}
								label={getCoagMode(coag.mode).label}
							></IconButton>
						</div>
						<UnitContainer>
							<UnitsDisplay
								action={onShowCoagModal}
								num={coag.power}
								unit={coag.units}
							/>

							<IncrementorButtons
								bgColor={COAG_COLOR}
								increment={incCoag}
								decrement={decCoag}
							/>
						</UnitContainer>
					</div>
				</RegularContainer>
			</Content>
		</Box>
	);
}

export default MonopolarView;
