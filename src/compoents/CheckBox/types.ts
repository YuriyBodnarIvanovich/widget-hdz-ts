export interface ICheckBox {
    active?: boolean;
    mainColor: string;
}


export interface ICheckBoxCompoent {
    answerId: string;
    text: string;
    handleSetIdAnswer: (id: string, status: boolean) => void;
    activeItem: boolean;
}