import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../../compoents/Button';
import CheckBox from '../../compoents/CheckBox';
import RedioButton from '../../compoents/RadioButton';
import { TextComponet } from '../../compoents/Text';
import { AppState } from '../../redux/store';
import { ButtonWrapper } from '../GettingData/styled';
import { QuestionWrapper } from './styled';
import { setAnswers, setQuestionPage, setQuestions } from '../../redux/slice/answersSlice';
import InputComponent from '../../compoents/Input';
// import { sendAnswer } from '../../API/index';
import { mockData } from '../../API/index';
const QuestionPage = () => {
    const questionPage = useSelector((state: AppState) => state.answersReducer.questionPage);
    const questionData = useSelector((state: AppState) => state.answersReducer.questions[questionPage]);
    // const clientId = useSelector((state: AppState) => state.answersReducer.clientId);
    const answers = useSelector((state: AppState) => state.answersReducer.answers);
    const dispatch = useDispatch();
    
    const handleBack = () => {
        dispatch(setQuestionPage(questionPage - 1));
    }

    const handleSubmit  = () => {
        // sendAnswer(clientId, answers[questionPage].answerData, answers[questionPage].comment).then((data)=> console.log(data)) !!! BE

        dispatch(setQuestions(mockData[questionPage + 1]));
        dispatch(setQuestionPage(questionPage + 1));
    }

    useEffect(()=>{
        if(!answers[questionPage]){
            const data = JSON.parse(JSON.stringify(answers));
            data.push({answerData: [], comment:''});
            dispatch(setAnswers([...data]))
        }
        // eslint-disable-next-line
    }, [answers, questionPage]);

    const handleSetIdAnswer = (id: string, status: boolean) => {
        let data = JSON.parse(JSON.stringify(answers));
        if(status){
            data[questionPage].answerData.push(id);
        }
        if(!status && data[questionPage]){
            data[questionPage].answerData = data[questionPage].answerData.filter((item: string) => item !== id);
        }
        dispatch(setAnswers([...data]))
    }

    const handleSetIdAnswerRadio = (id: string, status: boolean) => {
        let data = JSON.parse(JSON.stringify(answers));
        if(status){
            data[questionPage].answerData = [`${id}`];
        }
        if(!status && data[questionPage]){
            data[questionPage].answerData = data[questionPage].answerData.filter((item: string) => item !== id);
        }
        dispatch(setAnswers([...data]))
    }

    const checkActive = (id: string) => {
        if(answers[questionPage]){
            return answers[questionPage].answerData.some((item) => item === id); 
        }
        return false;
    }

    const handleChangeComment = (e:React.ChangeEvent<HTMLInputElement>) => {
        const data = JSON.parse(JSON.stringify(answers)); 
        data[questionPage].comment = e.target.value;
        dispatch(setAnswers([...data]));
    }

    return(
        <>
        <QuestionWrapper>
        <TextComponet  $margin='0 0 7px 0' $fontWeight='700' $fontSize='18px'>{questionData.text}</TextComponet>
            {
                questionData.answerItemResponses.map((item)=>{
                    if(questionData.questionType === 0){
                        return <RedioButton 
                                answerId={item.answerId} 
                                text={item.text} 
                                handleSetIdAnswer={handleSetIdAnswerRadio}
                                activeItem={checkActive(item.answerId)}/>
                    }
                    return <CheckBox 
                                answerId={item.answerId} 
                                text={item.text} 
                                handleSetIdAnswer={handleSetIdAnswer}
                                activeItem={checkActive(item.answerId)}/>
                })
            }
            <TextComponet  $margin='68px 0 7px 16px' $color='#A1A9B2' $fontWeight='500' $fontSize='16px'>
                Kommentar
            </TextComponet>
            <InputComponent 
                $width="100%" 
                $border="none" 
                $bottomborder="solid 2px #DEE1E7"
                $margin="65px 0 0 0px"
                name={'comment'}
                onChange={handleChangeComment}
                value={answers[questionPage]?.comment}
            />
        </QuestionWrapper>
        <ButtonWrapper>
            <ButtonComponent onClick={handleBack}
            $borderRadiusBottomLeft='30px'
            $border="1px solid #20252B"
            $color="#20252B">
                Previouse
            </ButtonComponent>
            <ButtonComponent onClick={handleSubmit}
            $borderRadiusBottomRight='30px'
            mainButton>
                START
            </ButtonComponent>
        </ButtonWrapper>
        </>
    )
}

export default QuestionPage;