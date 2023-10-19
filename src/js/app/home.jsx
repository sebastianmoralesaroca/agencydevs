import { ImagensProyect, ImagensHome, ImagensServices } from '../assets/imagens';
import { TextProyects, TextHome, TextButtons, TextServices } from '../assets/texts';
import { ButtonsPrin, ButtonRRSS } from '../components/buttons' ;
import { CardAbout, CardProy, CardServ,  } from '../components/cards' ;
import { Links } from "../assets/links" ;
import { MenuApp, Contact, Footer, Header } from "../components/sections" ;


export const Home= () => {
    return (
        <>
        <header className='sectHeader'>
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
            <ButtonsPrin text1={ TextButtons.portada_btn1 } text2={ TextButtons.portada_btn2 } />
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
                <CardServ
                    title={ TextServices.textDesarrollo.title }
                    itemText1={ TextServices.textDesarrollo.item1 } itemImg1={ ImagensServices.imgDesarrollo.item1 }
                    itemText2={ TextServices.textDesarrollo.item2 } itemImg2={ ImagensServices.imgDesarrollo.item2 }
                    itemText3={ TextServices.textDesarrollo.item3 } itemImg3={ ImagensServices.imgDesarrollo.item3 }
                    itemText4={ TextServices.textDesarrollo.item4 } itemImg4={ ImagensServices.imgDesarrollo.item4 }
                    itemText5={ TextServices.textDesarrollo.item5 } itemImg5={ ImagensServices.imgDesarrollo.item5 }
                    itemText6={ TextServices.textDesarrollo.item6 } itemImg6={ ImagensServices.imgDesarrollo.item6 }
                />
                <CardServ
                    title={ TextServices.textEcommerce.title }
                    itemText1={ TextServices.textEcommerce.item1 } itemImg1={ ImagensServices.imgEcommerce.item1 }
                    itemText2={ TextServices.textEcommerce.item2 } itemImg2={ ImagensServices.imgEcommerce.item2 }
                    itemText3={ TextServices.textEcommerce.item3 } itemImg3={ ImagensServices.imgEcommerce.item3 }
                    itemText4={ TextServices.textEcommerce.item4 } itemImg4={ ImagensServices.imgEcommerce.item4 }
                    itemText5={ TextServices.textEcommerce.item5 } itemImg5={ ImagensServices.imgEcommerce.item5 }
                    itemText6={ TextServices.textEcommerce.item6 } itemImg6={ ImagensServices.imgEcommerce.item6 }
                />
            </div>
        </section>
        <section className='sectProy'>
            <div className='sectProy_contTitle'>
                <p className='sectProy_contTitle_subtitle'>{ TextHome.proy_subtile }</p>
                <h2 className='sectProy_contTitle_title'>{ TextHome.proy_title }</h2>
                <CardProy
                    image={ ImagensProyect.proyect_1 }
                    title={ TextProyects.proyect_1 }
                    link1={ Links.prueba }
                    link2={ Links.prueba }
                />
                <CardProy
                    image={ ImagensProyect.proyect_2 }
                    title={ TextProyects.proyect_2 }
                    link1={ Links.prueba }
                    link2={ Links.prueba }
                    />
                <CardProy
                    image={ ImagensProyect.proyect_3 }
                    title={ TextProyects.proyect_3 }
                    link1={ Links.prueba }
                    link2={ Links.prueba }
                />
            </div>
        </section>
        <section className='sectCont'>
            <Contact />
        </section>
        <footer className='sectFooter'>
            <Footer />
        </footer>
        <section className='sectMenu'>
            <MenuApp />
        </section>
        </>
    )
}