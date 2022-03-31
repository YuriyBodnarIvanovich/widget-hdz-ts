import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import GettingData from "./GettingData";
import QuestionPage from "./QuestionPage";
import StartPage from "./StartPage";



const Pages = () => {
    const pageNumber = useSelector((state: AppState) => state.pagesReducer.pageNumber);

    switch(pageNumber) {
        case 0:
            return <StartPage/>
        case 1:
            return <GettingData/>
        case 2:
            return <QuestionPage/>
        default:
            return <></>
    }
}

export default Pages;