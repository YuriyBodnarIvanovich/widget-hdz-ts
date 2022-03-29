import type { ChangeEvent, HTMLAttributes, FocusEvent } from "react";

export interface InputProps {
	onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;

	name: string;
	$width?: string;
	$height?: string;
	$border?: string;
	$bottomborder?: string;
    $placeholder?: string;
	$margin?: string; 
	value?: string;
	error?: boolean;
	errorMessage?: string | undefined;
}

export interface IInputWrapper {
	$height?: string;

}
