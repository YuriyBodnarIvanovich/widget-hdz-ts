import React from "react";
import { TextComponet } from "../Text";
import { CheckBoxStyled, CheckBoxWrapper, InputBox } from "./styled";
import { ICheckBoxCompoent } from "./types";

const CheckBox:React.FC<ICheckBoxCompoent> = ({ answerId, text, handleSetIdAnswer, activeItem }) => {
    const handleChange = () => {
        handleSetIdAnswer(answerId, !activeItem);
    }

    return(
        <CheckBoxWrapper active={activeItem}>
            <InputBox>
                <CheckBoxStyled type='checkbox' checked={activeItem} onClick={handleChange}/> 
            </InputBox>
            <TextComponet $fontWeight="500" $fontSize="16px" $color="#20252B" $margin="0 0 0 9px">
                {text}   
            </TextComponet>
        </CheckBoxWrapper>
        
    )
}

export default CheckBox;