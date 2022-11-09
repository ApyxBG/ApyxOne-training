import styled from "styled-components/macro";

const Wrapper = styled.div`
  background-color: rgb(23, 34, 56);
  border: ${({ isSelected, color }) =>
    isSelected ? `solid 3px ${color}` : " solid 3px transparent"};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  color: ${({ isSelected, color }) => (isSelected ? color : "#fff")};
  cursor: pointer;
`;

const Icon = styled.div`
  transform: translateY(-0.05rem);
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
`;

export default { Wrapper, Icon, Text };
