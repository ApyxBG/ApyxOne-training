import React, { useState } from "react";
import ModeSetterView from "../views/ModeSetterView";

function ModeSetterComponent({
  title,
  obj,
  setObj,
  enumValues,
  color,
  getModeEnum,
  modeTitle,
}) {
  const [mode, setMode] = useState(getModeEnum(obj.mode));
  const [power, setPower] = useState(obj.power);
  const [isFreshKeyboard, setIsFreshKeyboard] = useState(true);

  const setModeWrapper = (myMode) => {
    if (power > myMode.range.max) {
      setPower(myMode.range.max);
    } else if (power < myMode.range.min) {
      setPower(myMode.range.min);
    }
    setMode(myMode);
  };

  const onSave = () => {
    setObj({ ...obj, mode: mode.id, power });
  };

  const setPowerWrapper = (value) => {
    setPower(value);
    setIsFreshKeyboard(true);
  };

  const setPowerFromKeyboard = (value) => {
    setPower(value);
    setIsFreshKeyboard(false);
  };

  return (
    <ModeSetterView
      title={title}
      mode={mode}
      setMode={setModeWrapper}
      power={power}
      setPower={setPowerWrapper}
      onSave={onSave}
      color={color}
      enumValues={enumValues}
      modeTitle={modeTitle}
      isFreshKeyboard={isFreshKeyboard}
      setPowerFromKeyboard={setPowerFromKeyboard}
    ></ModeSetterView>
  );
}

export default ModeSetterComponent;
