import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { TextComponet } from "../Text";
import { RadioButton, RadioButtonWrapper, RadioPagging } from "./styled";
import { IRadioButtonCompoent } from "./types";


const RedioButton: React.FC<IRadioButtonCompoent>  = ({ answerId, text, handleSetIdAnswer, activeItem }) => {
    const handleChange = () => {
        handleSetIdAnswer(answerId, !activeItem);
    }

    const textColor = useSelector((state: AppState) => state.mainToolsReducer.textColor);
    const mainColor = useSelector((state: AppState) => state.mainToolsReducer.mainColor);

    return(
        <RadioButtonWrapper active={activeItem} mainColor={mainColor}>
            <RadioPagging>
                <RadioButton type='radio' checked={activeItem} onClick={handleChange}
                 defaultChecked={ activeItem }/>
            </RadioPagging>
            <TextComponet $fontWeight="500" $fontSize="16px" $color={textColor} $margin="0 0 5px 9px">
                {text}   
            </TextComponet>
        </RadioButtonWrapper>
    )
}

export default RedioButton;