import React from "react";
import Link from "../../compoents/Link";
import { TextComponet } from "../../compoents/Text";
import { FeedBackBox } from "./style";

const FeedBack = () => {
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