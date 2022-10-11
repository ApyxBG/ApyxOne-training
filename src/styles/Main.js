import styled from "styled-components/macro";
import styleConstants from "../utils/StyleConstance.json"

export const Container = styled.div`
    margin: 0 auto;
    height: 96vh;
    width: 128vh;
    background-color: ${styleConstants.mainBgColor};
    padding: 0 2% 2% 2%;
    position: relative;
    color: white;
`;

export const Content = styled.div`
    width: 100%;
    height: 97%;
`; 

export const TopLine = styled.div`
    width: 100%;
    display: flex;
    height: 3%;
    justify-content: end;
`;