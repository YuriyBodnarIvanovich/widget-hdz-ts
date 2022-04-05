
export interface IRadioButton {
    active?: boolean;
}

export interface IRadioButtonCompoent {
    answerId: string;
    text: string;
    handleSetIdAnswer: (id: string, status: boolean) => void;
    activeItem: boolean;
}