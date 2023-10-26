import { ImagensHome } from "../assets/imagensASS" ;
import { Links } from "../assets/linksASS" ;
import { TextButtons, TextContact } from '../assets/textsASS' ;

// Button Principal
export const ButtonsPrin = ( props ) => {
    return (
        <div className="cont_btnPrin">
            <button className='btnPrin' type="button">{ props.text1 }<a href={ props.link1 } /></button>
            <button className='btnPrin' type="button"><a href={ props.link2 } /> { props.text2 }</button>
        </div>
    )
}

// Button SocialMedia
export const ButtonRRSS = () => {
    return (
        <div className='cont_btnRRSS'>
            <button className='btnRRSS' type="button"><img src={ ImagensHome.linkedin } alt="" style={{width:"20px"}}/><a href={ Links.prueba } /></button>
            <button className='btnRRSS' type="button"><img src={ ImagensHome.instagram } alt="" style={{width:"20px"}}/><a href={ Links.prueba } /></button>
        </div>
    )
}
