import styled from "styled-components/macro";
import { COAG_COLOR } from "../utils/Colors"

export const LongButton = styled.div`
  background-color: ${({ color }) => color};
  min-width: 6rem;
  border-radius: 15px;
  color: ${({ textColor = "1rem" }) => textColor};
  cursor: pointer;
  text-align: center;
  padding: 0.2rem;
  padding-right: ${({ paddingX = "0.2rem" }) => paddingX};
  padding-left: ${({ paddingX = "0.2rem" }) => paddingX};
  font-size: ${({ fontSize = "1rem" }) => fontSize};

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 90%;
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 90%;
  }
`;

export const RoundedBorder = styled.div`
  border: 2px solid ${({ color }) => color};
  min-width: 6rem;
  border-radius: 15px;
  color: ${({ color }) => color};
  text-align: center;
`;

export const VerticalLine = styled.div`
  background-color: ${({ bg }) => (bg ? bg : "rgb(23, 34, 56)")};
  width: 3px;
  height: 85%;
  margin: auto;
  border-radius: 2px;
`;

export const HorizontalLine = styled.div`
  background-color: ${({ bg }) => (bg ? bg : "rgb(23, 34, 56)")};
  width: ${({ width }) => (width ? width : "85%")};
  height: 3px;
  margin: auto;
  border-radius: 2px;
`;

export const CircleButton = styled.button`
  height: 2.1rem;
  width: 2.1rem;
  border: none;
  border-radius: 50%;
  margin: auto;
  padding: 0.2rem;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    vertical-align: text-bottom;
  }
`;

export const IconButton = styled.button`
  display: flex;
  min-width: 7rem;
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  color: white;
  background-color: ${(props) => props.color};
  margin: 2px 0;
  text-align: center;
  border: none;
  border-radius: 34px;
  box-shadow: 1px 6px 6px rgb(0 0 0 / 90%);

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 90%;
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 90%;
  }

  span.icon {
    transform: translateY(-3px);
  }
`;

const tbSize = 1.6; // = 30px
export const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: ${tbSize * 2}rem;
  height: ${tbSize}rem;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #172238;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${tbSize - 0.1}rem;
    width: ${tbSize - 0.1}rem;
    left: 1px;
    top: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #5adda4;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${tbSize}rem);
    -ms-transform: translateX(${tbSize}rem);
    transform: translateX(${tbSize}rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: ${tbSize + 0.2}rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider_icon {
    width: ${tbSize / 2 + 0.2}rem;
    height: ${tbSize / 2 + 0.2}rem;
    position: absolute;
    top: ${tbSize / 5}rem;
    right: ${(props) => (props.checked ? `calc(100% - ${tbSize}rem)` : "1px")};
    transform: translateX(-30%);

    path {
      stroke: rgb(255, 255, 255);
    }
  }
`;

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: ${tbSize * 2}rem;
  height: ${tbSize}rem;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${COAG_COLOR};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${tbSize - 0.1}rem;
    width: ${tbSize - 0.1}rem;
    left: 1px;
    top: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${COAG_COLOR};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${tbSize}rem);
    -ms-transform: translateX(${tbSize}rem);
    transform: translateX(${tbSize}rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: ${tbSize + 0.2}rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const Trademark = styled.div`
  display: flex;
  align-items: start;
  height: 80%;
  font-size: 0.7em;
`;

export const RegularContainer = styled.div`
  grid-template-columns: ${({ isTwoCol = true }) =>
    !isTwoCol ? "1fr" : "45% 10% 45%"};
  display: grid;
  height: 100%;
`;

export const UnitContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: ${({ isTwoCol = true }) =>
    isTwoCol ? "center" : "flex-end"};
  flex-direction: row;
  margin-right: 0.4rem;
  margin-top: 0.8rem;

  & div:last-child {
    right: 0;
    top: 0;
    position: absolute;
  }
`;

export const Slider = styled.div`
  input[type="range"] {
    -webkit-appearance: none;
    width: 12rem;
    height: 1.1rem;
    background: rgb(23, 34, 56);
    border-radius: 35px;
    background-image: linear-gradient(
      ${({ color }) => color},
      ${({ color }) => color}
    );
    background-size: ${(props) =>
      ((props.val - props.min) * 100) / (props.max - props.min)}%;
    background-repeat: no-repeat;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    border-radius: 50%;
    background: ${({ color }) => color};
    cursor: pointer;
    box-shadow: 1px 0 1px 0 #555;
    transition: background 0.3s ease-in-out;
  }
`;
