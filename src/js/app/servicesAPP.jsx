import { ObjServices } from '../assets/servicesASS';
import { TextHome } from '../assets/textsASS';
import { CardServ,  } from '../components/cardsCOM' ;


export const Services= () => {
    return (
        <section className='sectServices'>
            <div className='sectServices_contText'>
                <p className='sectServices_contText_text'>{ TextHome.serv_subtitle }</p>
                <h2 className='sectServices_contText_title'>{ TextHome.serv_title }</h2>
            </div>
            <div className='sectServices_contCard'>
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
                <CardServ
                    title={ ObjServices.integrations.title }
                    itemText1={ ObjServices.integrations.text1 } itemImg1={ ObjServices.integrations.img1 }
                    itemText2={ ObjServices.integrations.text2 } itemImg2={ ObjServices.integrations.img2 }
                    itemText3={ ObjServices.integrations.text3 } itemImg3={ ObjServices.integrations.img3 }
                    itemText4={ ObjServices.integrations.text4 } itemImg4={ ObjServices.integrations.img4 }
                    itemText5={ ObjServices.integrations.text5 } itemImg5={ ObjServices.integrations.img5 }
                    itemText6={ ObjServices.integrations.text6 } itemImg6={ ObjServices.integrations.img6 }
                />
                <CardServ
                    title={ ObjServices.support.title }
                    itemText1={ ObjServices.support.text1 } itemImg1={ ObjServices.support.img1 }
                    itemText2={ ObjServices.support.text2 } itemImg2={ ObjServices.support.img2 }
                    itemText3={ ObjServices.support.text3 } itemImg3={ ObjServices.support.img3 }
                    itemText4={ ObjServices.support.text4 } itemImg4={ ObjServices.support.img4 }
                    itemText5={ ObjServices.support.text5 } itemImg5={ ObjServices.support.img5 }
                    itemText6={ ObjServices.support.text6 } itemImg6={ ObjServices.support.img6 }
                />
                <CardServ
                    title={ ObjServices.optimizatios.title }
                    itemText2={ ObjServices.optimizatios.text1 } itemImg2={ ObjServices.optimizatios.img1 }
                    itemText1={ ObjServices.optimizatios.text2 } itemImg1={ ObjServices.optimizatios.img2 }
                    itemText3={ ObjServices.optimizatios.text3 } itemImg3={ ObjServices.optimizatios.img3 }
                    itemText4={ ObjServices.optimizatios.text4 } itemImg4={ ObjServices.optimizatios.img4 }
                    itemText5={ ObjServices.optimizatios.text5 } itemImg5={ ObjServices.optimizatios.img5 }
                    itemText6={ ObjServices.optimizatios.text6 } itemImg6={ ObjServices.optimizatios.img6 }
                />
                <CardServ
                    title={ ObjServices.appWeb.title }
                    itemText1={ ObjServices.appWeb.text1 } itemImg1={ ObjServices.appWeb.img1 }
                    itemText2={ ObjServices.appWeb.text2 } itemImg2={ ObjServices.appWeb.img2 }
                    itemText3={ ObjServices.appWeb.text3 } itemImg3={ ObjServices.appWeb.img3 }
                    itemText4={ ObjServices.appWeb.text4 } itemImg4={ ObjServices.appWeb.img4 }
                    itemText5={ ObjServices.appWeb.text5 } itemImg5={ ObjServices.appWeb.img5 }
                    itemText6={ ObjServices.appWeb.text6 } itemImg6={ ObjServices.appWeb.img6 }
                />
            </div>
        </section>
    )
}
