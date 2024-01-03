import { ImagensMenu } from "../../../imagensASS";
import { Home } from "../app/homeAPP";
import { Project } from "../app/projectAPP";
import { Services } from "../app/servicesAPP";
import { useState } from "react";
import { Contact, ContactWindow } from "../components/contactCOM";

export const MenuApp = () => {
    const [ home, setHome ] = useState( true ) ;
    const [ services, setServices ] = useState( null ) ;
    const [ project, setProject ] = useState( null ) ;
    
    const ShowHome = () => {
        setHome( true )
        setServices( false )
        setProject( false )
        window.scrollTo({ top: 0, left: 0 });
    }
    
    const ShowServices = () => {
        setHome( false )
        setServices( true )
        setProject( false )
        window.scrollTo({ top: 0, left: 0 });
    }
    
    const ShowProject = () => {
        setHome( false )
        setServices( false )
        setProject( true )
        window.scrollTo({ top: 0, left: 0 });
    }
    
    const OpenServices = () => {
        setHome(null)
        setServices(true)
        window.scrollTo({ top: 0, left: 0 });
    }   

    return (
        <div className='contMenu'>
            <nav className='contMenu_nav'>
                <ul className='contMenu_navUL'>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button" onClick={ ShowHome }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.home } alt=""/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button" onClick={ ShowServices }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.services } alt="" />
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button" onClick={ ShowProject }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.proyect } alt=""/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button">
                            <a href="https://www.instagram.com/seba.devs/">
                                <img className='contMenu_navUl_li_image' src={ ImagensMenu.contact } alt="" />
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
            { home && ( <Home serv={ OpenServices } /> )}
            { services && ( <Services /> ) }
            { project && ( <Project /> ) }
        </div>
    )
}