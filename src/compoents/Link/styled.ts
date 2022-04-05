import styled from "styled-components";
import { ILinkStyled } from "./types";


export const LinkComponet = styled.a<ILinkStyled>`
    color: ${({$color}) => $color ?? '#FE724C'};
    cursor: pointer;

`;