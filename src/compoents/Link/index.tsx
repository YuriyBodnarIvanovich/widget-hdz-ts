import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { LinkComponet } from "./styled";
import { ILink } from "./types";

const Link: React.FC<ILink>  = ({children}) => {
    const mainColor = useSelector((state: AppState) => state.mainToolsReducer.mainColor);
    return(
        <LinkComponet $color={mainColor}>{children}</LinkComponet>
    )
}

export default Link;