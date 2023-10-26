import { useState } from "react";
import { TextContact } from '../assets/textsASS' ;
import { ImagensHome } from "../assets/imagensASS";


// section contact
export const Contact = () => {
    const [ visible, setVisible ] = useState (false);
    const openContact = () => {
        setVisible( !visible );
    }
    const exitContact = () => {
        setVisible( false );
    }
    return (
        <div className='cont_contPrin'>
            <div className='cont_contPrin_contTitle'>
                <p className='cont_contPrin_contTitle_subtitle'>{ TextContact.subtitle }</p>
                <h2 className='cont_contPrin_contTitle_title'>{ TextContact.title }</h2>
        </div>
        <div>
            <button type="" onClick={ openContact }>{TextContact.btn_contact}</button>
            {visible &&
                <div className='contContactWindow'>
                    <div className='contContactWindow_contTitle'>
                        <h3 className='contContactWindow_contTitle_title'>{TextContact.contactWindow_title}</h3>
                        <p className='contContactWindow_contTitle_text'>{TextContact.contactWindow_subtitle}</p>
                    </div>
                    <div className="contContactWindow_contBtnInp">
                        <input className='contInput_input' type='number' name='input' placeholder={ TextContact.contactWindow_placeholderName } />
                        <input className='contInput_input' type='number' name='input' placeholder={ TextContact.contactWindow_placeholderWsp } />
                        <button className='contInput_button' type="submit">{ TextContact.btn_submit }</button>
                    </div>
                    <div className='contExit'>
                        <button className='buttonExit' onClick={exitContact} type="button"><img src={ImagensHome.cancel} alt="" /></button>
                    </div>
                </div>
}
        </div>
        </div>
    )
}