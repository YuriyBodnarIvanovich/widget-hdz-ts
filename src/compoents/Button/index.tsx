import React from "react";
import { useSelector } from "react-redux";
import { ButtonStyled } from "./styled";
import { IButtonComponent } from "./types";
import { AppState } from "../../redux/store";

const ButtonComponent: React.FC<IButtonComponent> = ({ 
    children, 
    onClick, 
    mainButton, 
    $width, 
    $height,
    $borderRadius,
    $borderRadiusBottomLeft,
    $borderRadiusBottomRight,
    $border,
    $fontWeidth,
    $fontSize,
    $color}) => {
    const mainColor = useSelector((state: AppState) => state.mainToolsReducer.mainColor);
    return(
        <ButtonStyled
         onClick={onClick} 
         $background={mainColor} 
         mainButton={mainButton}
         $width={$width}
         $height={$height}
         $borderRadius={$borderRadius}
         $borderRadiusBottomLeft={$borderRadiusBottomLeft}
         $borderRadiusBottomRight={$borderRadiusBottomRight}
         $border={$border}
         $fontWeidth={$fontWeidth}
         $fontSize={$fontSize}
         $color={$color}>
            {children}
        </ButtonStyled>
    )
}

export default ButtonComponent;