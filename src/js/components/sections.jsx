import { ButtonContact } from "./buttons" ;
import { TextHome, TextHeaderFooter } from "../assets/texts" ;
import { ImagensMenu } from "../assets/imagens" ;
import { LinksMenu } from "../assets/links" ;



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

// section contact
export const Contact = () => {
    return (
        <div className='cont_contPrin'>
            <div className='cont_contPrin_contTitle'>
                <p className='cont_contPrin_contTitle_subtitle'>{ TextHome.cont_subtitle }</p>
                <h2 className='cont_contPrin_contTitle_title'>{ TextHome.cont_title }</h2>
        </div>
            <ButtonContact />
        </div>
    )
}

// section menu
export const MenuApp = () => {
    return (
        <div className='contMenu'>
            <nav className='contMenu_nav'>
                <ul className='contMenu_navUL'>
                    <li className='contMenu_navUl_li'><button className='contMenu_navUl_li_btn' type="button"><img className='contMenu_navUl_li_image' src={ ImagensMenu.prueba } alt="" style={{width:"50px"}}/><link rel="" type="" href={ LinksMenu.prueba }/></button></li>
                    <li className='contMenu_navUl_li'><button className='contMenu_navUl_li_btn' type="button"><img className='contMenu_navUl_li_image' src={ ImagensMenu.prueba } alt="" style={{width:"50px"}}/><link rel="" type="" href={ LinksMenu.prueba }/></button></li>
                    <li className='contMenu_navUl_li'><button className='contMenu_navUl_li_btn' type="button"><img className='contMenu_navUl_li_image' src={ ImagensMenu.prueba } alt="" style={{width:"50px"}}/><link rel="" type="" href={ LinksMenu.prueba }/></button></li>
                    <li className='contMenu_navUl_li'><button className='contMenu_navUl_li_btn' type="button"><img className='contMenu_navUl_li_image' src={ ImagensMenu.prueba } alt="" style={{width:"50px"}}/><link rel="" type="" href={ LinksMenu.prueba }/></button></li>
                </ul>
            </nav>
        </div>
    )
}