import { ImagensServices } from '../assets/imagens';
import { TextHome, TextServices } from '../assets/texts';
import { CardServ,  } from '../components/cards' ;


export const Services= () => {
    return (
        <section className='sectServices'>
            <div className='sectServices_contText'>
                <p className='sectServices_contText_text'>{ TextHome.serv_subtitle }</p>
                <h2 className='sectServices_contText_title'>{ TextHome.serv_title }</h2>
            </div>
            <div className='sectServices_contCard'>
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
                <CardServ
                    title={ TextServices.textIntegrations.title }
                    itemText1={ TextServices.textIntegrations.item1 } itemImg1={ ImagensServices.imgIntegrations.item1 }
                    itemText2={ TextServices.textIntegrations.item2 } itemImg2={ ImagensServices.imgIntegrations.item2 }
                    itemText3={ TextServices.textIntegrations.item3 } itemImg3={ ImagensServices.imgIntegrations.item3 }
                    itemText4={ TextServices.textIntegrations.item4 } itemImg4={ ImagensServices.imgIntegrations.item4 }
                    itemText5={ TextServices.textIntegrations.item5 } itemImg5={ ImagensServices.imgIntegrations.item5 }
                    itemText6={ TextServices.textIntegrations.item6 } itemImg6={ ImagensServices.imgIntegrations.item6 }
                />
                <CardServ
                    title={ TextServices.textSoport.title }
                    itemText1={ TextServices.textSoport.item1 } itemImg1={ ImagensServices.imgSoport.item1 }
                    itemText2={ TextServices.textSoport.item2 } itemImg2={ ImagensServices.imgSoport.item2 }
                    itemText3={ TextServices.textSoport.item3 } itemImg3={ ImagensServices.imgSoport.item3 }
                    itemText4={ TextServices.textSoport.item4 } itemImg4={ ImagensServices.imgSoport.item4 }
                    itemText5={ TextServices.textSoport.item5 } itemImg5={ ImagensServices.imgSoport.item5 }
                    itemText6={ TextServices.textSoport.item6 } itemImg6={ ImagensServices.imgSoport.item6 }
                />
                <CardServ
                    title={ TextServices.textOptimizations.title }
                    itemText2={ TextServices.textOptimizations.item2 } itemImg2={ ImagensServices.imgOptimizations.item2 }
                    itemText1={ TextServices.textOptimizations.item1 } itemImg1={ ImagensServices.imgOptimizations.item1 }
                    itemText3={ TextServices.textOptimizations.item3 } itemImg3={ ImagensServices.imgOptimizations.item3 }
                    itemText4={ TextServices.textOptimizations.item4 } itemImg4={ ImagensServices.imgOptimizations.item4 }
                    itemText5={ TextServices.textOptimizations.item5 } itemImg5={ ImagensServices.imgOptimizations.item5 }
                    itemText6={ TextServices.textOptimizations.item6 } itemImg6={ ImagensServices.imgOptimizations.item6 }
                />
                <CardServ
                    title={ TextServices.textAppWeb.title }
                    itemText1={ TextServices.textAppWeb.item1 } itemImg1={ ImagensServices.imgAppWeb.item1 }
                    itemText2={ TextServices.textAppWeb.item2 } itemImg2={ ImagensServices.imgAppWeb.item2 }
                    itemText3={ TextServices.textAppWeb.item3 } itemImg3={ ImagensServices.imgAppWeb.item3 }
                    itemText4={ TextServices.textAppWeb.item4 } itemImg4={ ImagensServices.imgAppWeb.item4 }
                    itemText5={ TextServices.textAppWeb.item5 } itemImg5={ ImagensServices.imgAppWeb.item5 }
                    itemText6={ TextServices.textAppWeb.item6 } itemImg6={ ImagensServices.imgAppWeb.item6 }
                />
            </div>
        </section>
    )
}
