import styled from "styled-components";
import { IText } from "./types";

export const TextStyled = styled.span<IText>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({$fontWeight}) => $fontWeight ? $fontWeight : '700'};
    font-size: ${({$fontSize}) => $fontSize ?? '18px'};
    line-height: 120%;
    color: ${({$color})=> $color};
    display: block;
    margin: ${({$margin}) => $margin};
    position: ${({$postion}) => $postion};
    -webkit-transition: margin 0.5s, -webkit-transform 0.5s;
    transition: margin 0.5s, transform 0.5s;
`;
