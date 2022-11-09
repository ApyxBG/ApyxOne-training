import React from "react";
import PowerSetterComponent from "../components/PowerSetterComponent";
import { Box } from "../styles/Card";
import { LongButton } from "../styles/Common";
import { MAIN_BG_COLOR, NRG_COLOR, NRG_TITLE_COLOR } from "../utils/Colors";
import ToggleButton from "./ToggleButton";

function PulsingView({
  enabled,
  switchEnabled,
  showOnTimeModal,
  showOffTimeModal,
  onShowOnTimeModal,
  onShowOffTimeModal,
  onTime,
  offTime,
  setOnTime,
  setOffTime,
  range
}) {
  return (
    <Box>
      {showOnTimeModal && (
        <PowerSetterComponent
          color={NRG_COLOR}
          value={onTime}
          setValue={setOnTime}
          isFloat={false}
          range={range}
          title="Pulsing On Time"
          subtitle="On Time"
          units="ms"
          titleColor={NRG_TITLE_COLOR}
        ></PowerSetterComponent>
      )}
      {showOffTimeModal && (
        <PowerSetterComponent
          color={NRG_COLOR}
          value={offTime}
          setValue={setOffTime}
          isFloat={false}
          range={range}
          title="Pulsing Off Time"
          subtitle="Off Time"
          units="ms"
          titleColor={NRG_TITLE_COLOR}
        ></PowerSetterComponent>
      )}
      <div
        style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
        className="h-100 align-items-center px-2 me-4"
      >
        <div className="d-flex  align-items-center">
          <ToggleButton
            checked={enabled}
            onClick={switchEnabled}
          ></ToggleButton>
          <div
            style={{ enabled, marginLeft: ".5rem" }}
            className="d-flex flex-column "
          >
            <span
              style={{
                color: enabled ? "white" : "#405A93",
                letterSpacing: "2px",
              }}
            >
              {" "}
              Pulsing
            </span>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <LongButton
            textColor={enabled ? "white" : "#405A93"}
            color={enabled ? NRG_COLOR : MAIN_BG_COLOR}
            onClick={onShowOnTimeModal}
            fontSize="0.9rem"
          >{`${onTime} ms ON TIME`}</LongButton>
          <LongButton
            textColor={enabled ? "white" : "#405A93"}
            color={enabled ? NRG_COLOR : MAIN_BG_COLOR}
            onClick={onShowOffTimeModal}
            fontSize="0.9rem"
          >{`${offTime} ms OFF TIME`}</LongButton>
        </div>
      </div>
    </Box>
  );
}

export default PulsingView;
