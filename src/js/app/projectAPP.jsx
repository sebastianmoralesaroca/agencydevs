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
                    image={ ObjProject.project_1.image }
                    title={ ObjProject.project_1.title }
                    text={ ObjProject.project_1.text }
                    link={ ObjProject.project_1.link }
                />
                <CardProy
                    image={ ObjProject.project_2.image }
                    title={ ObjProject.project_2.title }
                    text={ ObjProject.project_2.text }
                    link={ ObjProject.project_2.link }
                />
                <CardProy
                    image={ ObjProject.project_3.image }
                    title={ ObjProject.project_3.title }
                    text={ ObjProject.project_3.text }
                    link={ ObjProject.project_3.link }
                />
                <CardProy
                    image={ ObjProject.project_4.image }
                    title={ ObjProject.project_4.title }
                    text={ ObjProject.project_4.text }
                    link={ ObjProject.project_4.link }
                />
                <CardProy
                    image={ ObjProject.project_5.image }
                    title={ ObjProject.project_5.title }
                    text={ ObjProject.project_5.text }
                    link={ ObjProject.project_5.link }
                />
                <CardProy
                    image={ ObjProject.project_6.image }
                    title={ ObjProject.project_6.title }
                    text={ ObjProject.project_6.text }
                    link={ ObjProject.project_6.link }
                />
            </div>
        </section>
    )
}