import { useState } from "react";
import PowerSetterView from "../views/PowerSetterView";

function PowerSetterComponent({ title, color, value, setValue, range, isFloat, units, subtitle, titleColor, subtitleColor, sliderRange }) {
    const [power, setPower] = useState(value);
    const [isFreshKeyboard, setIsFreshKeyboard] = useState(true);
    
    const onSave = () => {
        setValue(power);
    }

    const onClose = () => {
        setValue(value);
    }

    const setPowerWrapper = (value) => {
        setPower(value);
        setIsFreshKeyboard(true);
    }

    const setPowerFromKeyboard = (value) => {
        setPower(value);
        setIsFreshKeyboard(false);
    }

    return (
        <PowerSetterView
            title={title}
            subtitle={subtitle}
			power={power}
            setPower={setPowerWrapper}
            onSave={onSave}
            color={color}
            isFloat={isFloat}
            range={range}
            isFreshKeyboard={isFreshKeyboard}
            setPowerFromKeyboard={setPowerFromKeyboard}
            units={units}
            titleColor={titleColor}
            subtitleColor={subtitleColor}
            onClose={onClose}
            sliderRange={sliderRange}
		></PowerSetterView>
    );
}

export default PowerSetterComponent;