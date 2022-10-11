import styled from "styled-components/macro";

export const Modal = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  z-index: 40;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const Background = styled.div`
  background-color: rgba(10, 10, 10, 0.86);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: inherit;
  z-index: -10;
`;
