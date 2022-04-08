export interface ITextComponent {
    id?: string;
    children: string | JSX.Element,
    $fontSize?: string,
    $fontWeight?: string,
    $margin?: string,
    $color?: string,
    $postion?:string,

}

export interface IText {
    $fontSize?: string,
    $fontWeight?: string,
    $color?: string,
    $margin?: string,
    $postion?:string,
}