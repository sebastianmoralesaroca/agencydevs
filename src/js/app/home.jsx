import { Header } from '../components/header';
import { Imagens_Home } from '../assets/imagens';
import { Text_PortadaHome, Text_AboutHome, Text_servicesHome, Text_ProyectHome, Text_contactHome, Text_footer } from '../assets/texts';
import { ButtonsPrin, ButtonRRSS } from '../components/buttons' ;


export function Home () {
    return (
        <>
        <header className='header'>
            <Header />
        </header>
        <section className='portada_sect'>
            <div className='image_cont'>
                <img className='image_portada' src={ Imagens_Home.calidad } alt="" style={{width:"50px"}} />
            </div>
            <div className='text_cont'>
                <p className='subtitle_text'>{ Text_PortadaHome.subtitle }</p>
                <h1 className='title_text'>{ Text_PortadaHome.title }</h1>
            </div>
            <ButtonsPrin />
            <ButtonRRSS />
        </section>
        <section className='aboutHome_sect'>
            <div className='title_cont'>
                <p className='subtitle_text'>{ Text_AboutHome.subtitle }</p>
                <h2 className='title_text'>{ Text_AboutHome.title }</h2>
            </div>
            <div className='imgAbout_cont'>
                <img src={ Imagens_Home.calidad } alt="" style={{width:"50px"}} />
            </div>
        </section>
        </>
    )
}