import styled from "styled-components";
import { IProgress } from "./types";


export const LineProgressWrapper = styled.div`
    width: 100%;
    height: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    background: #DEE1E7;
    border-radius: 5px;
`;

export const ProgressLoad = styled.div<IProgress>`
    width: ${({pages}) => `${114 * (pages+1)}px`};
    height: 10px;
    background: ${({$backgoundColor})=> $backgoundColor};
    border-radius: 5px;
    -webkit-transition: width 2s, -webkit-transform 2s;
    transition: width 2s, transform 2s;
`;