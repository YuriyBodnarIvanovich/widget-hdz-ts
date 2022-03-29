import React from "react";
import { TextComponet } from "../Text";
import { InputStyle, InputWrapper } from "./styled";
import { InputProps } from "./types";

const InputComponent:React.FC<InputProps> = ({
  name,
  register,
  $width,
  $height,
  $border,
  $bottomborder,
  $margin,
  $placeholder,
  value,
  error,
  errorMessage,
  onChange
}) => {
  const margin = value ? '10px 40px 0 40px' : '30px 40px 0 56px';

  return(
    <InputWrapper>
        <TextComponet
          $margin={margin} 
          $color="#A1A9B3" 
          $postion={'absolute'}>
          {$placeholder || ''}
        </TextComponet>
        <InputStyle 
          $width={$width} 
          $height={$height} 
          $border={$border} 
          $bottomborder={$bottomborder}
          $margin={$margin}
          error={error}
          {...register(name, {onChange})}
        />
        {error && (
          <TextComponet
            $margin={'1px 0 0 40px'} 
            $color="red"
            $fontSize={'12px'}>
            {errorMessage ?? ''}
          </TextComponet>
          )}
    </InputWrapper>
  )
}

export default InputComponent;