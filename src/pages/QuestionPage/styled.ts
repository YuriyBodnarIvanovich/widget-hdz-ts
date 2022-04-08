import styled from "styled-components";
import { mediaMobile } from "../../static/mediaValues";

export const QuestionWrapper = styled.div`
    width: 1298px;
    height: auto;
    box-sizing: border-box;
    padding: 30px 40px 100px 40px;

    @media only screen and (min-width: 1025px) and (max-width: 1340px) {
        width: 980px;
    }

    @media only screen and (min-width: 845px) and (max-width: 1024px) {
        width: 800px;
    }

    @media only screen and (min-width: 605px) and (max-width: 844px) {
        width: 580px;
        #comment{
            margin-top: 40px;
        }
        #comment-input{
            margin-top: 30px;
        }
    }

    @media only screen and (min-width: 451px) and (max-width: 605px) {
        width: 380px;
        #comment{
            margin-top: 40px;
        }
        #comment-input{
            margin-top: 30px;
        }
    }
    ${mediaMobile}{
        width: 380px;
        #comment{
            margin-top: 20px;
        }
        #comment-input{
            margin-top: 20px;
        }
    }

   
`;