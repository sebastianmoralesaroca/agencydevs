import { TextHeaderFooter } from "../assets/textsASS" ;
import { ImagensHome } from '../assets/imagensASS' ;
import { darkmode } from '../utils/darkmode.js' ;






// sectioin header
export const Header = () => {
    return (
        <div className='contSecondHeader'>
            <h3 id="title_header" className="title_header">{ TextHeaderFooter.header_text }</h3>
            <button onClick={darkmode} className="btn_darkmode" type="button"><img className="img_darkmode" src={ ImagensHome.sol } alt=""/></button>
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
