import React, { useState, ChangeEvent } from "react";
import ButtonComponent from "../../compoents/Button";
import { ButtonWrapper, GettingDataWrapper, InputBox } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { setNumber } from "../../redux/slice/pagesSlice";
import { TextComponet } from "../../compoents/Text";
import InputComponent from "../../compoents/Input";
import { validateEmail, validateName, validateTelefone } from './validation';
import { getClientId } from "../../API";
import { setQuestions } from "../../redux/slice/answersSlice";
const GettingData = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state: AppState) => state.pagesReducer.pageNumber);
    const [name, setName] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [submitErr, setSubmitErr] = useState(false);
    const handleBack = () => {
        dispatch(setNumber(pageNumber - 1));
    }

    const handleTelefone = (e: ChangeEvent<HTMLInputElement>) => {
        const data = e.target.value.match(/\d/g)?.join('') ?? '';
        const dataNew = `(+ ${data.slice(0,2)} ${data.slice(2,5)}) ${data.slice(5,7)} ${data.slice(7,9)} ${data.slice(9)}`;
        data.length <= 12 && setTelefone(data ? dataNew : '');
    };

    const handleName = (e:  ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmail = (e:  ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit =  () => {
        if(name !== '' && telefone !== '' && email !== ''){
            getClientId(name, telefone, email).then( async (data) => {
                console.log(data);
                dispatch(setQuestions(data));
                dispatch(setNumber(pageNumber + 1));
            }) 
        }
        setSubmitErr(true);

    }

    return(
        <GettingDataWrapper>
            <TextComponet $margin="30px 40px 0 40px">
                Your data for getting results
            </TextComponet>
            <InputBox>
                <InputComponent 
                    $width="557px" 
                    $border="none" 
                    $bottomborder="solid 2px #DEE1E7"
                    $margin="30px 0 0 40px"
                    $placeholder="Name*"
                    name={'name'}
                    value={name}
                    onChange={handleName}
                    error={validateName(name).error}
                    errorMessage={validateName(name).message}
                    sumbit={submitErr && !name}
                />
                <InputComponent 
                    $width="557px" 
                    $border="none" 
                    $bottomborder="solid 2px #DEE1E7"
                    $margin="30px 0 0 40px"
                    $placeholder="Telefon*"
                    name={'telefon'}
                    value={telefone}
                    onChange={handleTelefone}
                    error={validateTelefone(telefone).error}
                    errorMessage={validateTelefone(telefone).message}
                    sumbit={submitErr && !telefone}
                />
                <InputComponent 
                    $width="557px" 
                    $border="none" 
                    $bottomborder="solid 2px #DEE1E7"
                    $margin="30px 0 0 40px"
                    $placeholder="Email-Adresse*"
                    name={'email'}
                    value={email}
                    onChange={handleEmail}
                    error={validateEmail(email).error}
                    errorMessage={validateEmail(email).message}
                    sumbit={submitErr && !email}
                />
            </InputBox>
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
        </GettingDataWrapper>
    )
}

export default GettingData;

