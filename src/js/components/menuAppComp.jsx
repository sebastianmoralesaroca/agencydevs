import { ImagensMenu } from "../assets/imagensASS";
import { Home } from "../app/homeAPP";
import { Project } from "../app/projectAPP";
import { Services } from "../app/servicesAPP";
import { useState } from "react";
import { Contact, ContactWindow } from "../components/contactCOM";



export const MenuApp = () => {
    const [ home, setHome ] = useState( true ) ;
    const [ services, setServices ] = useState( null ) ;
    const [ project, setProject ] = useState( null ) ;
    const [ window, setWindow ] = useState( null ) ;

    const ShowHome = () => {
        setHome( true )
        setServices( false )
        setProject( false )
    }

    const ShowServices = () => {
        setHome( false )
        setServices( true )
        setProject( false )
    }

    const ShowProject = () => {
        setHome( false )
        setServices( false )
        setProject( true )
    }

    const openWindow = () => {
        if (!window) {
            setWindow( true )
        } else if (window) {
            setWindow( false )
        } else {
            setWindow( null )
            }
    }

    const OpenServices = () => {
        setHome(null)
        setServices(true)
    }

    return (
        <div className='contMenu'>
            <nav className='contMenu_nav'>
                <ul className='contMenu_navUL'>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button" onClick={ ShowHome }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.home } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button" onClick={ ShowServices }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.services } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button" onClick={ ShowProject }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.proyect } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button"
                            onClick={ openWindow }>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.contact } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                </ul>
            </nav>
            { home && ( <Home serv={ OpenServices } /> )}
            { services && ( <Services /> ) }
            { project && ( <Project /> ) }
            { window && ( <ContactWindow />)}
            { }
        </div>
    )
}