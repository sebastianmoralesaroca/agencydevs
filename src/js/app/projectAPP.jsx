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
                    link1={ ObjProject.project_1.link1 }
                    link2={ ObjProject.project_1.link2 }
                />
                <CardProy
                    image={ ObjProject.project_2.image }
                    title={ ObjProject.project_2.title }
                    link1={ ObjProject.project_2.link1 }
                    link2={ ObjProject.project_2.link2 }
                />
                <CardProy
                    image={ ObjProject.project_3.image }
                    title={ ObjProject.project_3.title }
                    link1={ ObjProject.project_3.link1 }
                    link2={ ObjProject.project_3.link2 }
                />
                <CardProy
                    image={ ObjProject.project_4.image }
                    title={ ObjProject.project_4.title }
                    link1={ ObjProject.project_4.link1 }
                    link2={ ObjProject.project_4.link2 }
                />
                <CardProy
                    image={ ObjProject.project_5.image }
                    title={ ObjProject.project_5.title }
                    link1={ ObjProject.project_5.link1 }
                    link2={ ObjProject.project_5.link2 }
                />
                <CardProy
                    image={ ObjProject.project_6.image }
                    title={ ObjProject.project_6.title }
                    link1={ ObjProject.project_6.link1 }
                    link2={ ObjProject.project_6.link2 }
                />
            </div>
        </section>
    )
}