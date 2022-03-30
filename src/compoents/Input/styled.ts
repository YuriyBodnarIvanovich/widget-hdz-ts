import styled from "styled-components";
import { InputProps } from "./types";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputStyle = styled.input<InputProps>`
    width: ${({$width}) => $width ?? '100%'};
    height: ${({$height})=> $height ?? '26px'};
    border: ${({$border}) => $border};
    border-bottom: ${({$bottomborder}) => $bottomborder};
    outline: none;
    margin: ${({$margin}) => $margin};
    -webkit-appearance: none;
    ${({ error }) => error &&  `border-bottom: 2px solid red`};
    background: rgba(0, 0, 0, 0);
    

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
        border: ${({$border}) => $border};
        border-bottom: ${({$bottomborder}) => $bottomborder};
        -webkit-text-fill-color: black;
        transition: background-color 5000s ease-in-out 0s;
    }
    z-index: 1;

    &:focus{
        border-bottom: 1px solid #20252B;
    }
`;
