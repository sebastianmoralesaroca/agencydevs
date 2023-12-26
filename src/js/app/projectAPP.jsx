import { CardProy } from '../components/cardsCOM';
import { ObjProject } from '../assets/projectASS';
import { TextHome } from '../assets/textsASS';


export const Project = () => {
    return (
        <section className='sectProyect'>
            <div className='sectProyect_cont'>
                <p className='sectProyect_contText'>{ TextHome.proy_subtile }</p>
                <h2 className='sectProyect_contTitle'>{ TextHome.proy_title }</h2>
            </div>
            <div className='sectProyect_contCard'>
                <CardProy
                    image={ ObjProject.travel.image }
                    title={ ObjProject.travel.title }
                    text={ ObjProject.travel.text }
                    link={ ObjProject.travel.link }
                    btn={ ObjProject.travel.btn}
                />
                <CardProy
                    image={ ObjProject.breadShop.image }
                    title={ ObjProject.breadShop.title }
                    text={ ObjProject.breadShop.text }
                    link={ ObjProject.breadShop.link }
                    btn={ ObjProject.breadShop.btn }
                />
                <CardProy
                    image={ ObjProject.carLux.image }
                    title={ ObjProject.carLux.title }
                    text={ ObjProject.carLux.text }
                    link={ ObjProject.carLux.link }
                    btn={ ObjProject.carLux.btn }
                />
                <CardProy
                    image={ ObjProject.arsenal.image }
                    title={ ObjProject.arsenal.title }
                    text={ ObjProject.arsenal.text }
                    link={ ObjProject.arsenal.link }
                    btn={ ObjProject.arsenal.btn }
                />
                <CardProy
                    image={ ObjProject.portalStudent.image }
                    title={ ObjProject.portalStudent.title }
                    text={ ObjProject.portalStudent.text }
                    link={ ObjProject.portalStudent.link }
                    btn={ ObjProject.portalStudent.btn}
                />
                <CardProy
                    image={ ObjProject.loginSpotify.image }
                    title={ ObjProject.loginSpotify.title }
                    text={ ObjProject.loginSpotify.text }
                    link={ ObjProject.loginSpotify.link }
                    btn={ ObjProject.loginSpotify.btn}
                />
            </div>
        </section>
    )
}