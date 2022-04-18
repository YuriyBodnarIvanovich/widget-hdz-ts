import { pdf } from "@react-pdf/renderer";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "../../compoents/Link";
import PDFDocument from "../../compoents/PDFDocument";
import { TextComponet } from "../../compoents/Text";
import { AppState } from "../../redux/store";
import { FeedBackBox } from "./style";
import { sendEmailPDf } from "../../API";

const FeedBack = () => {
    const clientId = useSelector((state: AppState) => state.answersReducer.clientId);
    const questionnaireId = useSelector((state: AppState) => state.mainToolsReducer.questionnaireId);

    const generate = async () => {
        const result = await fetch(`https://hbz-dev.zubi.gmbh/api/client/answers/?clientId=${clientId}&questionnaireId=${questionnaireId}`).then(response => response.json())
        .then(data => data)
        const pdfFile = await pdf(<PDFDocument {...result} />).toBlob()
        sendEmailPDf(clientId,questionnaireId,pdfFile);
    }
    useEffect(() => {
        generate()
        // eslint-disable-next-line
    },[])
    
    return(
        <FeedBackBox>
            <TextComponet  $margin='0 0 7px 0' $fontWeight='700' $fontSize='18px'>
                Congratulations! You have successfully completed the questionary.
            </TextComponet>
            <TextComponet  $margin='30px 0 0 0' $fontWeight='500' $fontSize='16px'>
                We have send the results to your E-mail address
            </TextComponet>
            <TextComponet  $margin='40px 0 0 0' $fontWeight='500' $fontSize='16px'>
                <>Didn’t get results? <Link>Send again</Link></>
            </TextComponet>
        </FeedBackBox>
    )
}

export default FeedBack;