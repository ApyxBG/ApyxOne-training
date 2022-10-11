import styled from "styled-components/macro";

export const Box = styled.div`
  display: inline-block;
  background-color: rgb(39, 50, 78);
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: white;
  font-family: OpenSans-SemiBold;
`;

export const ModalBox = styled.div`
  background-color: rgb(39, 50, 78);
  border-radius: 15px;
  overflow: hidden;
  width: 70%;
  height: max-content;
  min-width: 18em;
  color: white;
  font-family: OpenSans-SemiBold;
`;

export const Title = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 2rem;
  color: white;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: calc(100% - 2rem);
`;
