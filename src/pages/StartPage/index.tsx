import React from "react";
import ButtonComponent from "../../compoents/Button";
import { TextComponet } from "../../compoents/Text";

const StartPage = () => {
    const handleStart = () => {
        console.log('Start!!!')
    }
    
    return(
        <>
            <TextComponet $margin="30px 0 0 30px">
                We are going to ask you a few question
                s to more accurately select courses for you
            </TextComponet>
            <ButtonComponent onClick={handleStart}
              $borderRadiusBottomLeft='30px'
              $borderRadiusBottomRight='30px'
              mainButton>
                START
            </ButtonComponent>
        </>
    )
}

export default StartPage;