import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { LineProgressWrapper, ProgressLoad } from "./styled";

const LineProgress:React.FC<{range: number}> = ({range}) => {
    const mainColor = useSelector((state: AppState) => state.mainToolsReducer.mainColor);
    const questionPage = useSelector((state: AppState) => state.answersReducer.questionPage);
    const borderColor = useSelector((state: AppState) => state.mainToolsReducer.borderColor);

    return(
        <LineProgressWrapper background={borderColor}>
            <ProgressLoad pages={range} stepQuestion={questionPage} $backgoundColor={mainColor}/>
        </LineProgressWrapper>
    )
}

export default LineProgress;