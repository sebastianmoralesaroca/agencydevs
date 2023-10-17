import { Imagens_Home } from "../assets/imagens"
import { Text_PortadaHome } from "../assets/texts"

export const ButtonsPrin = () => {
    return (
        <div className="btnPrin_cont">
            <button className='btnPrin' type="button">{ Text_PortadaHome.btn_services }</button>
            <button className='btnPrin' type="button">{ Text_PortadaHome.btn_contact }</button>
        </div>
    )
}

export const ButtonRRSS = () => {
    return (
        <div className='btnRRSS_cont'>
            <button className='btnRRSS' type="button"><a href="#" /><img src={ Imagens_Home.calidad } alt="" style={{width:"50px"}}/></button>
            <button className='btnRRSS' type="button"><a href="#" /><img src={ Imagens_Home.calidad } alt="" style={{width:"50px"}}s  /></button>
        </div>
    )
}