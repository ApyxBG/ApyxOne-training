import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AllPresets } from "../store/Preset";
import { Box } from "../styles/Card";
import { VerticalLine } from "../styles/Common";
import { Scrollbars } from "react-custom-scrollbars-2";
import styled from "styled-components";
import FrontBodyComponent from "./FrontBodyComponent";
import BackBodyComponent from "./BackBodyComponent";
import SwitchButton from "../views/SwitchButton";
import FaceComponent from "./FaceComponent";
import { TITLE_COLOR, COAG_COLOR } from "../utils/Colors";
import { Groups } from '../utils/BodyEnums';

function PresetsListComponent({ selectedPreset, setSelectedPreset }) {
  const allPresets = useRecoilValue(AllPresets);
  const [filter, setFilter] = useState();
  const [presets, setPresets] = useState(allPresets);
  const [isFrontBody, setIsFrontBody] = useState(true);
  const [isFace, setIsFace] = useState(false);

  useEffect(() => {
    if (filter) {
      setPresets(
        allPresets.filter((preset) => preset.bodyPart.part === filter)
      );
    } else {
      setPresets(allPresets);
    }
  }, [filter, allPresets]);

  useEffect(() => {
    if (selectedPreset) {
      switch(selectedPreset.bodyPart.group) {
        case Groups.BACK:
          setIsFace(false);
          setIsFrontBody(false);
          break;
        case Groups.FACE:
          setIsFace(true);
          break;
        case Groups.FRONT:
          setIsFace(false);
          setIsFrontBody(true);
          break;  
        default:
          break;
      }
    }
  }, [selectedPreset])

  useEffect(() => {
    if (presets && presets.length > 0 && !presets.includes(selectedPreset)) {
      setSelectedPreset(presets[0]);
    } else {
      setSelectedPreset(null);
    }
  }, [presets]);

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <div style={{ height: "100%" }}>
        <div
          onClick={() => {
            if (filter) {
              setFilter(null);
            }
          }}
          style={{
            textAlign: "center",
            height: "10%",
            cursor: filter ? "pointer" : "unset",
          }}
        >
          {filter ? `< ${filter} Presets` : "All Presets"}
        </div>
        <Scrollbars
          style={{ height: "85%", width: "12rem" }}
          renderTrackVertical={() => (
            <VerticalTrack
              style={{
                position: "absolute",
                width: "6px",
                bottom: "2px",
                top: "2px",
                borderRadius: "3px",
                backgroundColor: "rgb(23, 34, 56)",
              }}
            ></VerticalTrack>
          )}
        >
          <div
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              display: "grid",
              rowGap: "1rem",
            }}
          >
            {Array(Math.max(presets ? presets.length : 6, 6))
              .fill(0)
              .map((_, i) => {
                let preset = i < presets.length ? presets[i] : null;
                return (
                  <Box
                    key={`presetid${i}`}
                    onClick={() => {
                      if (preset) setSelectedPreset(preset);
                    }}
                    style={{
                      height: "4.5rem",
                      backgroundColor: "rgb(23, 34, 56)",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {preset ? (
                      <Preset
                        preset={preset}
                        selected={selectedPreset === preset}
                      ></Preset>
                    ) : (
                      <Preset id={`presetid${i}`}></Preset>
                    )}
                  </Box>
                );
              })}
          </div>
        </Scrollbars>
      </div>
      <VerticalLine style={{ height: "95%" }}></VerticalLine>
      <div style={{ height: "100%", width: "10rem", paddingTop: "0.2rem" }}>
        <div style={{ height: "15%", textAlign: "center" }}>
          <div style={{ height: "50%" }}>Filter</div>
          <div
            style={{
              height: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <span
              style={{
                color: isFrontBody || isFace ? "#405A93" : "inherit",
              }}
            >
              Back
            </span>
            <SwitchButton
              checked={isFrontBody}
              onClick={() => {
                setIsFace(false);
                setIsFrontBody((v) => !v);
              }}
            ></SwitchButton>
            <span
              style={{
                color: isFrontBody && !isFace ? "inherit" : "#405A93",
              }}
            >
              Front
            </span>
          </div>
        </div>
        <div
          style={{ position: "relative", height: "85%" }}
        >
          {isFace ? (
            <div className="p-3 text-center">
              <FaceComponent
                goBack={() => setIsFace(false)}
                selectedPart={selectedPreset && selectedPreset.bodyPart.part}
                setSelectedPart={(part) => setFilter(part)}
              ></FaceComponent>
            </div>
          ) : isFrontBody ? (
            <div
              style={{ position: "absolute", top: 0, left: 0 }}
              className="h-100 w-100 d-flex justify-content-center"
            >
              <FrontBodyComponent
                selectedPart={selectedPreset && selectedPreset.bodyPart.part}
                setSelectedPart={(part) => setFilter(part)}
                onHeadClicked={() => setIsFace(true)}
              ></FrontBodyComponent>
            </div>
          ) : (
            <div
              style={{ position: "absolute", top: "-6px", left: "-3.5px" }}
              className="h-100 w-100 d-flex justify-content-center"
            >
              <BackBodyComponent
                selectedPart={selectedPreset && selectedPreset.bodyPart.part}
                setSelectedPart={(part) => setFilter(part)}
              ></BackBodyComponent>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Preset({ preset, selected }) {
  const selectedColor = COAG_COLOR;
  return (
    preset && (
      <>
        <div
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: selected ? selectedColor : TITLE_COLOR,
            display: "grid",
            alignItems: "center",
            fontSize: "0.8rem",
          }}
        >
          {typeof preset.bodyPart.name === 'string' ? preset.bodyPart.name : preset.bodyPart.part}
        </div>
        <div
          style={{
            width: "100%",
            height: "50%",
            borderBottom: selected ? `solid 0.2rem ${selectedColor}` : "none",
            borderLeft: selected ? `solid 0.2rem ${selectedColor}` : "none",
            borderRight: selected ? `solid 0.2rem ${selectedColor}` : "none",
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit",
            display: "grid",
            alignItems: "center",
            fontSize: "0.8rem",
          }}
        >
          {preset.name}
        </div>
      </>
    )
  );
}

const VerticalTrack = styled.div`
  * {
    background-color: rgb(63, 90, 147) !important;
  }
`;

export default PresetsListComponent;
