import { TextHeaderFooter } from "../assets/textsASS" ;

// sectioin header
export const Header = () => {
    return (
        <div className='contSecondHeader'>
            <h3 className="title_header">{ TextHeaderFooter.header_text }</h3>
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
