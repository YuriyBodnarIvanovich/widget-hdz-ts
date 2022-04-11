import styled from "styled-components";
import { IRadioButton } from "./types";

export const RadioButtonWrapper = styled.div<IRadioButton>`
    wdith: 100%;
    display: flex;
    margin-top: 20px;
input[type=radio] {
    appearance: none;
    background-color: ${({active, mainColor}) => active ?  mainColor : '#fff'};
    margin: 0;
    font: inherit;
    color: #0f43f9;
    width: 16px;
    height: 16px;
    border: 2px solid  ${({active, mainColor}) => active ? mainColor : ' #dadada'};
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: flex;

    align-items: center;
    justify-content: center;
}

input[type=radio]::before {
    content: "";
    width: 4px;
    height: 4px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #fff;
    border-radius: 50%;
    transform-origin: center center;
}

input[type=radio]:checked:before {
    transform: scale(1);
}

`;

export const RadioPagging = styled.div`
    padding: 3px 0 0 0;
`;

export const RadioButton = styled.input`
`;