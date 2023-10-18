import { Header } from '../components/header';
import { ImagensProyect, ImagensHome } from '../assets/imagens';
import { TextProyects, TextHome, TextContact, TextHeaderFooter } from '../assets/texts';
import { ButtonsPrin, ButtonRRSS } from '../components/buttons' ;
import { CardAbout, CardProy, CardServ, Item_CardServ } from '../components/cards' ;
import { Links } from "../assets/links" ;


export function Home () {
    return (
        <>
        <header className='header'>
            <Header />
        </header>
        <section className='sectPort'>
            <div className='sectPort_contImg'>
                <img className='sectPort_contImg_image' src={ ImagensHome.calidad } alt="" style={{width:"50px"}} />
            </div>
            <div className='sectPort_contText'>
                <p className='sectPort_contTitle_subtitle'>{ TextHome.portada_subtitle }</p>
                <h1 className='sectPort_contTitle_title'>{ TextHome.portada_title }</h1>
            </div>
            <ButtonsPrin text1={ TextHome.portada_btn1 } text2={ TextHome.portada_btn2 } />
            <ButtonRRSS />
        </section>
        <section className='sectAbout'>
            <div className='sectAbout_contTitle'>
                <p className='sectAbout_contTitle_subtitle'>{ TextHome.about_subtitle }</p>
                <h2 className='sectAbout_contTitle_title'>{ TextHome.about_title }</h2>
            </div>
            <div className='sectAbout_contImg'>
                <img className='sectAbout_contImg_image' src={ ImagensHome.calidad } alt="" style={{width:"50px"}} />
            </div>
            <div className='sectAbout_contCards'>
                <CardAbout img={ ImagensHome.calidad } title={ TextHome.about_card1_title } text={ TextHome.about_card1_text } />
                <CardAbout img={ ImagensHome.calidad } title={ TextHome.about_card2_title } text={ TextHome.about_card2_text } />
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
                <CardServ title={ TextHome.serv_card1_title } itemText1={ TextHome.serv_card1_text1 } itemImg1={ ImagensHome.calidad } itemText2={ TextHome.serv_card1_text2 } itemImg2={ ImagensHome.calidad } itemText3={ TextHome.serv_card1_text3 } itemImg3={ ImagensHome.calidad } itemText4={ TextHome.serv_card1_text4 } itemImg4={ ImagensHome.calidad } itemText5={ TextHome.serv_card1_text5 } itemImg5={ ImagensHome.calidad } itemText6={ TextHome.serv_card1_text6 } itemImg6={ ImagensHome.calidad } />
                <CardServ title={ TextHome.serv_card2_title } itemText1={ TextHome.serv_crad2_text1 } itemImg1={ ImagensHome.calidad } itemText2={ TextHome.serv_crad2_text2 } itemImg2={ ImagensHome.calidad } itemText3={ TextHome.serv_crad2_text3 } itemImg3={ ImagensHome.calidad } itemText4={ TextHome.serv_crad2_text4 } itemImg4={ ImagensHome.calidad } itemText5={ TextHome.serv_crad2_text5 } itemImg5={ ImagensHome.calidad } itemText6={ TextHome.serv_crad2_text6 } itemImg6={ ImagensHome.calidad } />
            </div>
        </section>
        <section className='sectProy'>
            <div className='sectProy_contTitle'>
                <p className='sectProy_contTitle_subtitle'>{ TextHome.proy_subtile }</p>
                <h2 className='sectProy_contTitle_title'>{ TextHome.proy_title }</h2>
                <CardProy image={ ImagensProyect.proyect1 } title={ TextProyects.proyect_1 } link1={ Links.prueba } link2={ Links.prueba } />
            </div>
        </section>
        </>
    )
}