
export interface IRadioButton {
    active?: boolean;
    mainColor: string;

}

export interface IRadioButtonCompoent {
    answerId: string;
    text: string;
    handleSetIdAnswer: (id: string, status: boolean) => void;
    activeItem: boolean;
}