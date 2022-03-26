import styled from "styled-components";
import { IButtonComponent } from "./types";

export const ButtonStyled = styled.button<IButtonComponent>`
    width: ${({$width}) => $width ?? '100%'};
    height: ${({$height}) => $height ?? '60px'};
    background:${({$background, mainButton}) => mainButton ? $background : '#FFFFFF'};
    border-radius: ${({$borderRadius}) => $borderRadius};
    border-bottom-left-radius: ${({$borderRadiusBottomLeft}) => $borderRadiusBottomLeft};
    border-bottom-right-radius: ${({$borderRadiusBottomRight}) => $borderRadiusBottomRight};
    outline: none;
    border: ${({$border}) => $border ?? 'none'};
    position: absolute;
    bottom: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({$fontWeidth}) => $fontWeidth ?? '700'};
    font-size: ${({$fontSize}) =>  $fontSize ?? '14px'};
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${({$color}) => $color ?? '#FFFFFF'};
    cursor: pointer;

`;