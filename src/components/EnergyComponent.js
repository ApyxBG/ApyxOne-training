import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Energy } from "../store/Preset";
import EnergyView from "../views/EnergyView";

function EnergyComponent() {
  const [energy, setEnergy] = useRecoilState(Energy);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const setLimit = (value) => {
    setEnergy({ ...energy, limit: { ...energy.limit, value } });
    setShowLimitModal(false);
  };
  const switchCounterEnabled = () => {
    setEnergy({
      ...energy,
      counter: { ...energy.counter, enabled: !energy.counter.enabled },
      limit: {
        ...energy.limit,
        enabled: !energy.counter.enabled && energy.limit.enabled,
      },
    });
  };
  const switchLimitEnabled = () => {
    if (energy.counter.enabled) {
      setEnergy({
        ...energy,
        limit: { ...energy.limit, enabled: !energy.limit.enabled },
      });
    }
  };
  return (
    <EnergyView
      counter={energy.counter}
      limit={energy.limit}
      onShowLimitModal={() => setShowLimitModal(true)}
      setLimit={setLimit}
      showLimitModal={showLimitModal}
      switchCounterEnabled={switchCounterEnabled}
      switchLimitEnabled={switchLimitEnabled}
    ></EnergyView>
  );
}

export default EnergyComponent;
