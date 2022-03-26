export interface ITextComponent {
    children: string | JSX.Element,
    $fontSize?: string,
    $fontWeight?: string,
    $margin?: string,
}

export interface IText {
    $fontSize?: string,
    $fontWeight?: string,
    $color?: string,
    $margin?: string,
}