import React from "react";
import { TextComponet } from "../Text";
import { RadioButton, RadioButtonWrapper, RadioPagging } from "./styled";
import { IRadioButtonCompoent } from "./types";


const RedioButton: React.FC<IRadioButtonCompoent>  = ({ answerId, text, handleSetIdAnswer, activeItem }) => {
    const handleChange = () => {
        handleSetIdAnswer(answerId, !activeItem);
    }
    return(
        <RadioButtonWrapper active={activeItem}>
            <RadioPagging>
                <RadioButton type='radio' checked={activeItem} onClick={handleChange}/>
            </RadioPagging>
            <TextComponet $fontWeight="500" $fontSize="16px" $color="#20252B" $margin="0 0 5px 9px">
                {text}   
            </TextComponet>
        </RadioButtonWrapper>
    )
}

export default RedioButton;