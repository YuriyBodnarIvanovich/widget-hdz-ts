import styled from "styled-components";
import { ICheckBox } from "./types";


export const CheckBoxWrapper = styled.div<ICheckBox>`
    wdith: 100%;
    display: flex;
    margin-top: 20px;
    input[type=checkbox] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
        font: inherit;
        color: #0f43f9;
        width: 18px;
        height: 18px;
        flex: 1 0 24px;
        border-radius: 0.35em;
        display: flex;
    
        align-items: center;
        justify-content: center;

        background-color: ${({active}) => active ? '#FE724C' : '#fff'};
        border: ${({active}) => active ? 'none' : '2px solid #A1A9B3'};

    }

    input[type=checkbox]:checked::before {
        transform: scale(1);
    }

    input[type=checkbox]::before {
        content: "";
        width: 14px;
        height: 11px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #fff;
        transform-origin: bottom left;
        -webkit-clip-path: polygon(40% 68%, 85% 23%, 100% 39%, 40% 98%, 1% 62%, 17% 46%);
        clip-path: polygon(40% 68%, 85% 23%, 100% 39%, 40% 98%, 1% 62%, 17% 46%);

    }
`;

export const CheckBoxStyled = styled.input`
`;
export const InputBox = styled.div`
    widthL 18px;
    height: 18px;
    box-sizing: border-box;

`;