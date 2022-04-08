import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { TextComponet } from "../Text";
import { CheckBoxStyled, CheckBoxWrapper, InputBox } from "./styled";
import { ICheckBoxCompoent } from "./types";

const CheckBox:React.FC<ICheckBoxCompoent> = ({ answerId, text, handleSetIdAnswer, activeItem }) => {
    const handleChange = () => {
        handleSetIdAnswer(answerId, !activeItem);
    }

    const textColor = useSelector((state: AppState) => state.mainToolsReducer.textColor);
    const mainColor = useSelector((state: AppState) => state.mainToolsReducer.mainColor);

    return(
        <CheckBoxWrapper active={activeItem} mainColor={mainColor}>
            <InputBox>
                <CheckBoxStyled type='checkbox' checked={activeItem} onClick={handleChange}
                defaultChecked={ activeItem } /> 
            </InputBox>
            <TextComponet $fontWeight="500" $fontSize="16px" $color={textColor} $margin="0 0 0 9px">
                {text}   
            </TextComponet>
        </CheckBoxWrapper>
        
    )
}

export default CheckBox;