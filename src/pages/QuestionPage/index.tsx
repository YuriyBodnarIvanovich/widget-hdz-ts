import React, { useEffect, useState } from 'react';
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
import { sendAnswer } from '../../API/index';
import { setNumber } from '../../redux/slice/pagesSlice';
const QuestionPage = () => {
    const questionPage = useSelector((state: AppState) => state.answersReducer.questionPage);
    const questionData = useSelector((state: AppState) => state.answersReducer.questions[questionPage]);
    const clientId = useSelector((state: AppState) => state.answersReducer.clientId);
    const answers = useSelector((state: AppState) => state.answersReducer.answers);
    const dispatch = useDispatch();
    const textColor = useSelector((state: AppState) => state.mainToolsReducer.textColor);
    const borderColor = useSelector((state: AppState) => state.mainToolsReducer.borderColor);
    const [disabledNext, setDiabled] = useState(false);
    
    const handleBack = () => {
        questionPage > 0 ? dispatch(setQuestionPage(questionPage - 1)) : dispatch(setNumber(1))
    }

    const handleSubmit  = () => {
        sendAnswer(clientId, answers[questionPage].answerData, answers[questionPage].comment).then((data)=> {
            dispatch(setQuestions(data));
            dispatch(setQuestionPage(questionPage + 1));

        }).catch(()=>{
            dispatch(setNumber(3))
        })
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

    useEffect(()=> {

        if(questionData.questionType === 0 && answers[questionPage]?.answerData.length !== 0){
            setDiabled(false)
        }else if(questionData.questionType === 1 && answers[questionPage]?.answerData.length !== 0){
            setDiabled(false)
        }else if(questionData.questionType === 2 && answers[questionPage]?.comment.length !== 0){
            setDiabled(false)
        }else{
            setDiabled(true)
        }
    // eslint-disable-next-line
    },[answers]);

    return(
        <>
        <QuestionWrapper id='main'>
        <TextComponet  $margin='0 0 7px 0' $fontWeight='700' $fontSize='18px'>{questionData.text}</TextComponet>
            {
                questionData.answerItemResponses.map((item, index)=>{
                    if(questionData.questionType === 0){
                        return <RedioButton 
                                key={index}
                                answerId={item.answerId} 
                                text={item.text} 
                                handleSetIdAnswer={handleSetIdAnswerRadio}
                                activeItem={checkActive(item.answerId)}/>
                    }
                    return <CheckBox 
                                key={index}
                                answerId={item.answerId} 
                                text={item.text} 
                                handleSetIdAnswer={handleSetIdAnswer}
                                activeItem={checkActive(item.answerId)}/>
                })
            }
            <TextComponet  $margin='68px 0 7px 16px' $color={textColor} $fontWeight='500' $fontSize='16px' id='comment'>
                Kommentar
            </TextComponet>
            <InputComponent 
                $width="100%" 
                $border="none" 
                $bottomborder={`solid 2px ${borderColor}`}
                $margin="65px 0 0 0px"
                name={'comment'}
                onChange={handleChangeComment}
                value={answers[questionPage]?.comment ?? ''}
                id='comment-input'
            />
        </QuestionWrapper>
        <ButtonWrapper>
            <ButtonComponent onClick={handleBack}
            $borderRadiusBottomLeft='30px'
            $border={`1px solid ${borderColor}`}
            $color="#20252B"
           
            >
                Previouse
            </ButtonComponent>
            <ButtonComponent onClick={handleSubmit}
            $borderRadiusBottomRight='30px'
            mainButton
            $disabled={disabledNext}>
                NEXT
            </ButtonComponent>
        </ButtonWrapper>
        </>
    )
}

export default QuestionPage;