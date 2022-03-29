import React, { ChangeEvent } from "react";
import ButtonComponent from "../../compoents/Button";
import { ButtonWrapper, GettingDataWrapper, InputBox } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { setNumber } from "../../redux/slice/pagesSlice";
import { TextComponet } from "../../compoents/Text";
import InputComponent from "../../compoents/Input";
import {useForm} from "react-hook-form";
import { validationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";

const GettingData = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state: AppState) => state.pagesReducer.pageNumber);

    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: '',
            telefon: '',
            email: ''
        },
    });

    const [ nameWathcer, telefonWathcer, emailWatcher ] = watch([ 'name', 'telefon','email' ]);

    const handleBack = () => {
        dispatch(setNumber(pageNumber - 1));
    }

    const next = () => {
        dispatch(setNumber(pageNumber + 1));
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const data = e.target.value.match(/\d/g)?.join('') ?? '';
        const dataNew = `(+ ${data.slice(0,2)} ${data.slice(2,5)}) ${data.slice(5,7)} ${data.slice(7,9)} ${data.slice(9)}`;
        setValue('telefon', data ? dataNew : '');
      };

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
                    register={register}
                    name={'name'}
                    value={nameWathcer}
                    errorMessage={errors.name?.message}
                    error={!!errors.name}
                />
                <InputComponent 
                    $width="557px" 
                    $border="none" 
                    $bottomborder="solid 2px #DEE1E7"
                    $margin="30px 0 0 40px"
                    $placeholder="Telefon*"
                    register={register}
                    name={'telefon'}
                    value={telefonWathcer}
                    errorMessage={errors.telefon?.message}
                    onChange={handleChange}
                    error={!!errors.telefon}
                />
                <InputComponent 
                    $width="557px" 
                    $border="none" 
                    $bottomborder="solid 2px #DEE1E7"
                    $margin="30px 0 0 40px"
                    $placeholder="Email-Adresse*"
                    register={register}
                    name={'email'}
                    value={emailWatcher}
                    errorMessage={errors.email?.message}
                    error={!!errors.email}
                />
            </InputBox>
            <ButtonWrapper>
                <ButtonComponent onClick={handleBack}
                $borderRadiusBottomLeft='30px'
                $border="1px solid #20252B"
                $color="#20252B">
                    Previouse
                </ButtonComponent>
                <ButtonComponent onClick={handleSubmit(next)}
                $borderRadiusBottomRight='30px'
                mainButton>
                    START
                </ButtonComponent>
            </ButtonWrapper>
        </GettingDataWrapper>
    )
}

export default GettingData;

