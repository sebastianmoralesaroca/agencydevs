import { ImagensHome } from '../assets/imagensASS';
import { TextHome } from '../assets/textsASS';
import { CardAbout, CardProy, CardServ,  } from '../components/cardsCOM' ;
import { ObjProject } from '../assets/projectASS' ;
import { ObjServices } from '../assets/servicesASS';
import { useState } from 'react';
import { Services } from "./servicesAPP";


export const Home= ( props ) => {
    return (
        <>
        <section className='sectPort'>
            <div className='sectPort_contImg'>
                <img className='sectPort_contImg_image' src={ ImagensHome.mePortada } alt="" />
            </div>
            <div className='sectPort_contPrin'>
                <p className='sectPort_contTitle_subtitle'>{ TextHome.portada_subtitle }</p>
                <h1 className='sectPort_contTitle_title'>{ TextHome.portada_title }</h1>
                <div className='contServices'>
                    <button className='button_services' type="button" onClick={props.serv}>Servicios</button>
                </div>
                <div className='contRRSS'>
                    <button className='buton_RRSS' type="button"><img className='buton_RRSS_image' src={ImagensHome.instagram} alt=""/></button>
                    <button className='buton_RRSS' type="button"><img className='buton_RRSS_image' src={ImagensHome.linkedin} alt=""/></button>
                </div>
            </div>
        </section>
        <section className='sectAbout'>
            <div className='sectAbout_contTitle'>
                <p className='sectAbout_contTitle_subtitle'>{ TextHome.about_subtitle }</p>
                <h2 className='sectAbout_contTitle_title'>{ TextHome.about_title }</h2>
            </div>
            <div className='sectAbout_contPrin'>
                <div className='sectAbout_contPrin_contImage'>
                    <img className='sectAbout_contImg_image' src={ ImagensHome.meAbout } alt="" />
                </div>
                <div className='sectAbout_contPrin_contCardText'>
                    <div className='sectAbout_contCards'>
                        <CardAbout img={ ImagensHome.medal } title={ TextHome.about_card1_title } text={ TextHome.about_card1_text } />
                        <CardAbout img={ ImagensHome.movile } title={ TextHome.about_card2_title } text={ TextHome.about_card2_text } />
                    </div>
                    <p className='sectAbout_contText_text'>{ TextHome.about_text }</p>
                </div>
            </div>
        </section>
        <section className='sectServ'>
            <div className='sectServ_contTitle'>
                <p className='sectServ_contTitle_subtitle'>{ TextHome.serv_subtitle }</p>
                <h2 className='sectServ_contTitle_title'>{ TextHome.serv_title }</h2>
            </div>
            <div className='sectServ_contCards'>
                <CardServ
                    title={ ObjServices.desarrollo.title }
                    itemText1={ ObjServices.desarrollo.text1 } itemImg1={ ObjServices.desarrollo.img1 }
                    itemText2={ ObjServices.desarrollo.text2 } itemImg2={ ObjServices.desarrollo.img2 }
                    itemText3={ ObjServices.desarrollo.text3 } itemImg3={ ObjServices.desarrollo.img3 }
                    itemText4={ ObjServices.desarrollo.text4 } itemImg4={ ObjServices.desarrollo.img4 }
                    itemText5={ ObjServices.desarrollo.text5 } itemImg5={ ObjServices.desarrollo.img5 }
                    itemText6={ ObjServices.desarrollo.text6 } itemImg6={ ObjServices.desarrollo.img6 }
                />
                <CardServ
                    title={ ObjServices.ecommerce.title }
                    itemText1={ ObjServices.ecommerce.text1 } itemImg1={ ObjServices.ecommerce.img1 }
                    itemText2={ ObjServices.ecommerce.text2 } itemImg2={ ObjServices.ecommerce.img2 }
                    itemText3={ ObjServices.ecommerce.text3 } itemImg3={ ObjServices.ecommerce.img3 }
                    itemText4={ ObjServices.ecommerce.text4 } itemImg4={ ObjServices.ecommerce.img4 }
                    itemText5={ ObjServices.ecommerce.text5 } itemImg5={ ObjServices.ecommerce.img5 }
                    itemText6={ ObjServices.ecommerce.text6 } itemImg6={ ObjServices.ecommerce.img6 }
                />
            </div>
        </section>
        <section className='sectProy'>
            <div className='sectProy_contTitle'>
                <p className='sectProy_contTitle_subtitle'>{ TextHome.proy_subtile }</p>
                <h2 className='sectProy_contTitle_title'>{ TextHome.proy_title }</h2>
            </div>
            <div className='sectPtoy_contCard'>
                <CardProy
                    image={ ObjProject.travel.image }
                    title={ ObjProject.travel.title }
                    text={ ObjProject.travel.text }
                    link1={ ObjProject.travel.link }
                    btn={ ObjProject.travel.btn }
                />
                <CardProy
                    image={ ObjProject.breadShop.image }
                    title={ ObjProject.breadShop.title }
                    text={ ObjProject.breadShop.text }
                    link1={ ObjProject.breadShop.link }
                    btn={ ObjProject.breadShop.btn }
                    />
                <CardProy
                    image={ ObjProject.carLux.image }
                    title={ ObjProject.carLux.title }
                    text={ ObjProject.carLux.text }
                    link1={ ObjProject.carLux.link }
                    btn={ ObjProject.carLux.btn }
                />
            </div>
        </section>
        </>
    )
}