import styled from "styled-components/macro";

export const KeyboardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 2.5rem);
  grid-template-columns: repeat(3, 2.5rem);
  grid-gap: 1.3rem;

  button.keyboard-grid__button {
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background: ${({ themeColor }) => themeColor};
    border-radius: 50%;
    box-shadow: 1px 6px 6px rgb(0 0 0 / 90%);
  }

  button.keyboard-grid__delete {
    border: none;
    box-shadow: none;
    background: transparent;
  }

  .grid_filler {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;
