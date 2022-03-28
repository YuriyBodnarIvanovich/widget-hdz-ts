import React from "react";
import ButtonComponent from "../../compoents/Button";
import { TextComponet } from "../../compoents/Text";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { setNumber } from "../../redux/slice/pagesSlice";
const StartPage = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state: AppState) => state.pagesReducer.pageNumber);

    const handleStart = () => {
        console.log('Start!!!');
        dispatch(setNumber(pageNumber + 1));
    }

    
    return(
        <>
            <TextComponet $margin="30px 40px 0 40px">
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