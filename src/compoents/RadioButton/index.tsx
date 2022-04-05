import React from "react";
import { TextComponet } from "../Text";
import { RadioButton, RadioButtonWrapper } from "./styled";
import { IRadioButtonCompoent } from "./types";


const RedioButton: React.FC<IRadioButtonCompoent>  = ({ answerId, text, handleSetIdAnswer, activeItem }) => {
    const handleChange = () => {
        handleSetIdAnswer(answerId, !activeItem);
    }
    return(
        <RadioButtonWrapper active={activeItem}>
            <RadioButton type='radio' checked={activeItem} onClick={handleChange}/>
            <TextComponet $fontWeight="500" $fontSize="16px" $color="#20252B" $margin="0 0 0 9px">
                {text}   
            </TextComponet>
        </RadioButtonWrapper>
    )
}

export default RedioButton;