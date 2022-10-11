import useMonopolarController from "../controllers/useMonopolarController";
import MonopolarView from "../views/MonopolarView";
import useBipolarController from "../controllers/useBipolarController";
import BipolarView from "../views/BipolarView";
import useHeliumController from "../controllers/useHeliumController";
import HeliumView from "../views/HeliumView";
import useEnergyController from "../controllers/useEnergyController";
import EnergyView from "../views/EnergyView";
import usePulsingController from "../controllers/usePulsingController";
import PulsingView from "../views/PulsingView";
import EnergyViewExtended from "../views/EnergyViewExtended";
import PulsingViewExtended from "../views/PulsingViewExtended";
import HeliumViewExtended from "../views/HeliumViewExtended";

function PresetView({
  monopolar1,
  setMonopolar1,
  monopolar2,
  setMonopolar2,
  bipolar,
  setBipolar,
  helium,
  setHelium,
  energy,
  setEnergy,
  pulsing,
  setPulsing,
  showMonopolar,
  showCoolCoag,
}) {
  const monopolar1Controller = useMonopolarController(
    monopolar1,
    setMonopolar1
  );
  const monopolar2Controller = useMonopolarController(
    monopolar2,
    setMonopolar2
  );
  const bipolarController = useBipolarController(bipolar, setBipolar);
  const heliumController = useHeliumController(helium, setHelium);
  const energyController = useEnergyController(energy, setEnergy);
  const pulsingController = usePulsingController(pulsing, setPulsing);

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: showMonopolar ? "50% 50%" : "1fr 1fr 1fr",
          gridTemplateRows: showMonopolar
            ? "35% 25% 10% 10% 20%"
            : "40% 33% 27%",
          height: "100%",
          maxHeight: "33rem",
          maxWidth: "50rem",
        }}
      >
        {showMonopolar ? (
          <>
            {" "}
            <div
              style={{
                gridRowStart: "1",
                gridRowEnd: "2",
                padding: "0 1% 1% 1%",
              }}
            >
              <MonopolarView
                title="Monopolar 1"
                {...monopolar1Controller}
              ></MonopolarView>
            </div>
            <div
              style={{
                gridRowStart: "2",
                gridRowEnd: "4",
                padding: "1%",
              }}
            >
              <MonopolarView
                title="Monopolar 2"
                {...monopolar2Controller}
              ></MonopolarView>
            </div>
            <div
              style={{
                gridRowStart: "4",
                gridRowEnd: "6",
                padding: "1%",
              }}
            >
              <BipolarView {...bipolarController}></BipolarView>
            </div>
            <div
              style={{
                gridRowStart: "1",
                gridRowEnd: "3",
                padding: "0 1% 1% 1%",
              }}
            >
              <HeliumView
                isCoagOn={showCoolCoag}
                {...heliumController}
              ></HeliumView>
            </div>
            <div
              style={{
                gridRowStart: "3",
                gridRowEnd: "5",
                padding: "1%",
              }}
            >
              <EnergyView {...energyController}></EnergyView>
            </div>
            <div
              style={{
                gridRowStart: "5",
                gridRowEnd: "6",
                padding: "1%",
              }}
            >
              <PulsingView {...pulsingController}></PulsingView>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div
              style={{
                gridRowStart: "1",
                gridRowEnd: "2",
                gridColumnStart: "1",
                gridColumnEnd: "4",
                padding: "0 1% 1% 1%",
              }}
            >
              <HeliumViewExtended
                isCoagOn={showCoolCoag}
                {...heliumController}
              ></HeliumViewExtended>
            </div>
            <div
              style={{
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
                padding: "1%",
              }}
            >
              <EnergyViewExtended {...energyController}></EnergyViewExtended>
            </div>
            <div
              style={{
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "4",
                padding: "1%",
              }}
            >
              <PulsingViewExtended {...pulsingController}></PulsingViewExtended>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default PresetView;
