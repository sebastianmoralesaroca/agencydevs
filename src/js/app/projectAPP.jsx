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
                    image={ ObjProject.project_4.image }
                    title={ ObjProject.project_4.title }
                    text={ ObjProject.project_4.text }
                    link={ ObjProject.project_4.link }
                    btn={ ObjProject.project_4.btn }
                />
                <CardProy
                    image={ ObjProject.project_5.image }
                    title={ ObjProject.project_5.title }
                    text={ ObjProject.project_5.text }
                    link={ ObjProject.project_5.link }
                    btn={ ObjProject.project_5.btn}
                />
                <CardProy
                    image={ ObjProject.instagram.image }
                    title={ ObjProject.instagram.title }
                    text={ ObjProject.instagram.text }
                    link={ ObjProject.instagram.link }
                    btn={ ObjProject.instagram.btn}
                />
            </div>
        </section>
    )
}