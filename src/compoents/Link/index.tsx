import React from "react";
import { LinkComponet } from "./styled";
import { ILink } from "./types";

const Link: React.FC<ILink>  = ({children}) => {
    return(
        <LinkComponet>{children}</LinkComponet>
    )
}

export default Link;