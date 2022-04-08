import styled from "styled-components";
import { mediaMobile } from "../../static/mediaValues";

export const GettingDataWrapper = styled.div`
    width: 1298px;
    height: 375px;



    @media only screen and (min-width: 1025px) and (max-width: 1340px) {
        width: 980px;
        height: 375px;
    }

    @media only screen and (min-width: 845px) and (max-width: 1024px) {
        width: 800px;
        height: 375px;
    }

    @media only screen and (min-width: 605px) and (max-width: 844px) {
        width: 580px;
        height: 375px;
    }

    @media only screen and (min-width: 451px) and (max-width: 605px) {
        width: 380px;
        height: 375px;
    }
    ${mediaMobile}{
        width: 380px;
        height: 375px;
    }

`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const InputBox = styled.div`
    width: calc(50% - 45px);
    @media screen and (max-width: 844px) {
        width: calc(100% - 100px);
    }
    margin-top: 45px;
    box-sizing: border-box;

    input{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #20252B;
        mix-blend-mode: normal;
    }


`;