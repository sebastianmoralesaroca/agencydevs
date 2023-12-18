import { useState } from "react";
import { TextContact } from '../assets/textsASS' ;
import { ImagensHome, ImagensMenu } from "../assets/imagensASS";




export const ContactWindow = () => {
    return (
        <div className='contContactWindow'>
            <div className='contContactWindow_container'>
                <img className='imagensWindow' src={ ImagensHome.contactWin } alt="" />
                <h4 className='contContactWindow_title'>{TextContact.contactWindow_text}</h4>
                <input className='contInput_input' type='text' name='input' placeholder={ TextContact.contactWindow_placeholderName } />
                <input className='contInput_input' type='number' name='input' placeholder={ TextContact.contactWindow_placeholderWsp } />
                <button className='contInput_button' type="submit">{ TextContact.btn_submit }</button>
            </div>
        </div>
    )
}

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact_contText'>
                <p className='contact_contText_subtitle'>{ TextContact.subtitle }</p>
                <h2 className='contact_contText_title'>{ TextContact.title }</h2>
                <p className='contact_contText_text'>{ TextContact.contact_text }</p>
            </div>
            <div className='contact_contBTN'>
                <button className='contact_contBTN_btn' type="button">
                    <a className='contact_conBTN_A' href="https://www.instagram.com/seba.devs/">
                        <img className='contact_contBTN_img' src={ ImagensHome.instagram } alt=""/>
                        @sebadevs
                    </a>
                </button>
            </div>
        </div>
    )
}