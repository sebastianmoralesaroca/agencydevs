import { useState } from "react";
import { TextContact } from '../assets/textsASS' ;
import { ImagensHome } from "../assets/imagensASS";




export const ContactWindow = () => {
    return (
        <div className='contContactWindow'>
            <div className='contContactWindow_contTitle'>
                <p className='contContactWindow_contTitle_title'>{TextContact.contactWindow_text}</p>
            </div>
            <div className="contContactWindow_contBtnInp">
                <input className='contInput_input' type='number' name='input' placeholder={ TextContact.contactWindow_placeholderName } />
                <input className='contInput_input' type='number' name='input' placeholder={ TextContact.contactWindow_placeholderWsp } />
                <button className='contInput_button' type="submit">{ TextContact.btn_submit }</button>
            </div>
        </div>
    )
}

export const Contact = () => {
    return (
        <div className='cont_contPrin'>
            <div className='cont_contPrin_contTitle'>
                <p className='cont_contPrin_contTitle_subtitle'>{ TextContact.subtitle }</p>
                <h2 className='cont_contPrin_contTitle_title'>{ TextContact.title }</h2>
                <p className='contContactWindow_contTitle_text'>{ TextContact.contact_text }</p>
        </div>
        </div>
    )
}