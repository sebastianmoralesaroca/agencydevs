import { InputContact, ButtonContact } from "./buttonsCOM" ;
import { TextHeaderFooter } from "../assets/textsASS" ;
import { ImagensMenu } from "../assets/imagensASS" ;
import { LinksMenu } from "../assets/linksASS" ;
import { TextContact } from "../assets/textsASS";



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
                <p className='cont_contPrin_contTitle_subtitle'>{ TextContact.subtitle }</p>
                <h2 className='cont_contPrin_contTitle_title'>{ TextContact.title }</h2>
        </div>
            <ButtonContact />
        </div>
    )
}

// contact window
export const ContactWindow = () => {
    return (
        <div className='contContactWindow'>
            <div className='contContactWindow_contTitle'>
                <h3 className='contContactWindow_contTitle_title'></h3>
                <p className='contContactWindow_contTitle_text'></p>
            </div>
            <div className="contContactWindow_contBtnInp">
                <InputContact />
            </div>
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