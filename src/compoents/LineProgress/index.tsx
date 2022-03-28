import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { LineProgressWrapper, ProgressLoad } from "./styled";

const LineProgress = () => {
    const pageNumber = useSelector((state: AppState) => state.pagesReducer.pageNumber);
    const mainColor = useSelector((state: AppState) => state.mainToolsReducer.mainColor);

    return(
        <LineProgressWrapper>
            <ProgressLoad pages={pageNumber} $backgoundColor={mainColor}/>
        </LineProgressWrapper>
    )
}

export default LineProgress;