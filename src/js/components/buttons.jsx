import { ImagensHome } from "../assets/imagens" ;
import { Links } from "../assets/links" ;

export const ButtonsPrin = ( props ) => {
    return (
        <div className="cont_btnPrin">
            <button className='btnPrin' type="button"><a href={ props.link1 } />{ props.text1 }</button>
            <button className='btnPrin' type="button"><a href={ props.link2 } />{ props.text2 }</button>
        </div>
    )
}

export const ButtonRRSS = () => {
    return (
        <div className='cont_btnRRSS'>
            <button className='btnRRSS' type="button"><a href={ Links.prueba } /><img src={ ImagensHome.calidad } alt="" style={{width:"50px"}}/></button>
            <button className='btnRRSS' type="button"><a href={ Links.prueba } /><img src={ ImagensHome.calidad } alt="" style={{width:"50px"}} /></button>
        </div>
    )
}