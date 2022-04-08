import styled from "styled-components";
import { mediaMobile } from "../../static/mediaValues";

export const StartPageBox = styled.div`
    width: 1289px;
    height: 140px;
    @media only screen and (min-width: 1025px) and (max-width: 1340px) {
        width: 980px;
        height: 140px;
    }

    @media only screen and (min-width: 845px) and (max-width: 1024px) {
        width: 800px;
        height: 140px;
    }

    @media only screen and (min-width: 605px) and (max-width: 844px) {
        width: 580px;
        height: 140px;
    }

    @media only screen and (min-width: 451px) and (max-width: 605px) {
        width: 380px;
        height: 140px;
    }
    ${mediaMobile}{
        width: 380px;
        height: 140px;
    }

`;