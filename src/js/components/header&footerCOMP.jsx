import { TextHeaderFooter } from "../assets/textsASS" ;
import { ImagensHome } from '../assets/imagensASS' ;
import { useState } from "react";




// sectioin header
export const Header = () => {
    const sun = ImagensHome.sol ;
    const moon = ImagensHome.luna ;
    const [toggleSun, setToggleSun] = useState( sun ) ;
    const handleSun =()=>{
        setToggleSun(( toggleSun === sun ) ? moon : sun ) ;
        body.classList.toggle('darkBackground') ;
        const logo = document.querySelector('.title_header') ;
        logo.classList.toggle('darkLogo') ;
    }

    return (
        <div className='contSecondHeader'>
            <h3 id="title_header" className="title_header">{ TextHeaderFooter.header_text }</h3>
            <button onClick={handleSun} className="btn_darkmode" type="button">
                <img className="img_darkmode" src={ toggleSun } alt=""/>
            </button>
        </div>

)
}

// section footer
export const Footer = () => {
    return (
        <div className='contSecondFooter'>
            <p className='textFooter'>{ TextHeaderFooter.footer_text }</p>
        </div>
    )
}
