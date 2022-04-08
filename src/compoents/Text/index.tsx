import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { TextStyled } from "./styled";
import { ITextComponent } from "./types";

export const TextComponet:React.FC<ITextComponent> = (
    { 
        children, 
        $fontSize, 
        $fontWeight, 
        $margin,
        $color,
        $postion,
        id

    }) => {

    const textColor = useSelector((state: AppState) => state.mainToolsReducer.textColor);

    return(
        <TextStyled $fontSize={$fontSize} $fontWeight={$fontWeight} $margin={$margin} $color={$color ?? textColor} $postion={$postion} id={id}>
            {children}
        </TextStyled>
    )
}