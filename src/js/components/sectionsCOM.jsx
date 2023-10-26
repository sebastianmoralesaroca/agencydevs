import { TextHeaderFooter } from "../assets/textsASS" ;
import { ImagensMenu } from "../assets/imagensASS" ;
import { LinksMenu } from "../assets/linksASS" ;
import { TextContact } from "../assets/textsASS";
import { useState } from "react";



// sectioin header
export const Header = () => {
    return (
        <div className='contHeader'>
            <h3>{ TextHeaderFooter.header_text }</h3>
        </div>
    )
}

// section footer
export const Footer = () => {
    return (
        <div className='contFooter'>
            <p className='textFooter'>{ TextHeaderFooter.footer_text }</p>
        </div>
    )
}
