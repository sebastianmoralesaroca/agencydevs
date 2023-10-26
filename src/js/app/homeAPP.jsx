import { ImagensHome } from '../assets/imagensASS';
import { TextHome, TextButtons } from '../assets/textsASS';
import { ButtonsPrin, ButtonRRSS } from '../components/buttonsCOM' ;
import { CardAbout, CardProy, CardServ,  } from '../components/cardsCOM' ;
import {  } from "../assets/linksASS" ;
import { ObjProject } from '../assets/projectASS' ;
import { ObjServices } from '../assets/servicesASS';



export const Home= () => {
    return (
        <>
        <section className='sectPort'>
            <div className='sectPort_contImg'>
                <img className='sectPort_contImg_image' src={ ImagensHome.mePortada } alt="" style={{width:"100px"}} />
            </div>
            <div className='sectPort_contText'>
                <p className='sectPort_contTitle_subtitle'>{ TextHome.portada_subtitle }</p>
                <h1 className='sectPort_contTitle_title'>{ TextHome.portada_title }</h1>
            </div>
            <ButtonsPrin text1={ TextButtons.portada_btn1 } text2={ TextButtons.portada_btn2 } />
            <ButtonRRSS />
        </section>
        <section className='sectAbout'>
            <div className='sectAbout_contTitle'>
                <p className='sectAbout_contTitle_subtitle'>{ TextHome.about_subtitle }</p>
                <h2 className='sectAbout_contTitle_title'>{ TextHome.about_title }</h2>
            </div>
            <div className='sectAbout_contImg'>
                <img className='sectAbout_contImg_image' src={ ImagensHome.meAbout } alt="" style={{width:"100px"}} />
            </div>
            <div className='sectAbout_contCards'>
                <CardAbout img={ ImagensHome.medal } title={ TextHome.about_card1_title } text={ TextHome.about_card1_text } />
                <CardAbout img={ ImagensHome.movile } title={ TextHome.about_card2_title } text={ TextHome.about_card2_text } />
            </div>
            <div className='sectAbout_contText'>
                <p className='sectAbout_contText_text'>{ TextHome.about_text }</p>
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
                <CardProy
                    image={ ObjProject.project_1.image }
                    title={ ObjProject.project_1.title }
                    text={ ObjProject.project_1.text }
                    link1={ ObjProject.project_1.link }
                />
                <CardProy
                    image={ ObjProject.project_2.image }
                    title={ ObjProject.project_2.title }
                    text={ ObjProject.project_2.text }
                    link1={ ObjProject.project_2.link }
                    />
                <CardProy
                    image={ ObjProject.project_3.image }
                    title={ ObjProject.project_3.title }
                    text={ ObjProject.project_3.text }
                    link1={ ObjProject.project_3.link }
                />
            </div>
        </section>
        </>
    )
}