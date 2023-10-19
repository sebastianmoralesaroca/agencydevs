import { ImagensHome } from "../assets/imagens" ;
import { Links } from "../assets/links" ;
import { TextButtons } from '../assets/texts' ;


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
            <button className='btnRRSS' type="button"><a href={ Links.prueba } /><img src={ ImagensHome.calidad } alt="" style={{width:"50px"}}/></button>
            <button className='btnRRSS' type="button"><a href={ Links.prueba } /><img src={ ImagensHome.calidad } alt="" style={{width:"50px"}} /></button>
        </div>
    )
}

// Button Contact
export const ButtonContact = () => {
    return (
        <div className='cont_btnContact'>
            <button className="cont_btnContact_button" type="button"><img className='cont_btnContact_image' src={ ImagensHome.calidad } alt="" style={{width:"20px"}}/>{ TextButtons.contact } </button>
        </div>
    )
}