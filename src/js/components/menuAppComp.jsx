import { ImagensMenu } from "../assets/imagensASS";
import { Home } from "../app/homeAPP";
import { Project } from "../app/projectAPP";
import { Services } from "../app/servicesAPP";
import { useState } from "react";


// section menu
export const MenuApp = () => {
    const [ home, setHome ] = useState( true ) ;
    const [ services, setServices ] = useState( null ) ;
    const [ project, setProject ] = useState( null ) ;

    return (
        <div className='contMenu'>
            <nav className='contMenu_nav'>
                <ul className='contMenu_navUL'>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button"
                            onClick={() => { setHome( true ), setServices( false ), setProject( false ) }}>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.home } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button"
                            onClick={() => { setHome( false ), setServices( true ), setProject( false )}}>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.services } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button"
                            onClick={() => { setHome( false ), setServices( false ), setProject( true )}}>
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.proyect } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                    <li className='contMenu_navUl_li'>
                        <button className='contMenu_navUl_li_btn' type="button">
                            <img className='contMenu_navUl_li_image' src={ ImagensMenu.contact } alt="" style={{width:"50px"}}/>
                        </button>
                    </li>
                </ul>
            </nav>
            { home && ( <Home /> ) }
            { services && ( <Services /> ) }
            { project && ( <Project /> ) }
        </div>
    )
}