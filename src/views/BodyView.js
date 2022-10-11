import React from "react";
import { Box, Content, Title } from "../styles/Card";
import BackBodyComponent from "../components/BackBodyComponent";
import FrontBodyComponent from "../components/FrontBodyComponent";
import FaceComponent from "../components/FaceComponent";
import { VerticalLine } from "../styles/Common";
import { TITLE_COLOR } from "../utils/Colors";

function BodyView({
  frontPart,
  setFrontPart,
  backPart,
  setBackPart,
  facePart,
  setFacePart,
  faceSelected,
  closeFace,
  onFaceClicked,
}) {
  return (
    <Box>
      <Title color={TITLE_COLOR}>Body</Title>
      <Content>
        <div style={{ display: "grid", gridTemplateColumns: "45% 10% 45%" }}>
          <div className="h-100 w-100 text-center ">
            {faceSelected ? (
              <div
                style={{
                  position: "relative",
                  marginRight: "-10%",
                }}
                className="p-4 pt-5 h-100 w-100"
              >
                <div
                  style={{ position: "absolute", right: 0, top: "1rem" }}
                  className=""
                >
                  Front
                </div>
                <FaceComponent
                  goBack={closeFace}
                  selectedPart={facePart}
                  setSelectedPart={setFacePart}
                ></FaceComponent>
              </div>
            ) : (
              <div
                style={{
                  marginRight: "-10%",
                  position: "relative",
                }}
                className="h-100 w-100"
              >
                <div
                  style={{ position: "absolute", right: 0, top: "1rem" }}
                  className=""
                >
                  Front
                </div>
                <FrontBodyComponent
                  selectedPart={frontPart}
                  setSelectedPart={setFrontPart}
                  onHeadClicked={onFaceClicked}
                ></FrontBodyComponent>
              </div>
            )}
          </div>
          <div style={{ display: "flex" }}>
            <VerticalLine></VerticalLine>
          </div>
          <div
            style={{
              marginLeft: "-5%",
              position: "relative",
            }}
            className="h-100 w-100"
          >
            <div
              style={{ position: "absolute", right: 0, top: "1rem" }}
              className=""
            >
              Back
            </div>
            <BackBodyComponent
              selectedPart={backPart}
              setSelectedPart={setBackPart}
            ></BackBodyComponent>
          </div>
        </div>
      </Content>
    </Box>
  );
}

export default BodyView;
