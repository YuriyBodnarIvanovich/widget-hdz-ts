import styled from "styled-components";
import { mediaMobile } from "../../static/mediaValues";

export const FeedBackBox = styled.div`
    width: 594px;
    height:236px;
    box-sizing: border-box;
    padding: 40px 60px 30px 60px;
    text-align: center;

    @media only screen and (min-width: 450px) and (max-width: 670px) {
        width: 480px;
        height:236px;
        padding: 30px 50px 20px 50px;
    }

    ${mediaMobile}{
        width: calc(100% - 50px);
        height: 236px;
        padding: 40px 20px 20px 30px;
    }
`;