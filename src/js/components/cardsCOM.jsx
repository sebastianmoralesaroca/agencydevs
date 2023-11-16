import { TextButtons } from "../assets/textsASS" ;


// Card Home About
export const CardAbout = ( props ) => {
    return (
        <div className='cont_cardAbout'>
            <img className='img_cardAbout' src={ props.img } alt="" />
            <h4 className='title_cardAbout'>{ props.title }</h4>
            <p className='text_cardAbout'>{ props.text }</p>
        </div>
    )
}

// Card Services
export const Item_CardServ = (props) => {
    return (
        <div className='contCard_serv_contItem'>
            <img className='contCard_serv_contItem_itemImg' src={ props.itemImg } alt="" />
            <h4 className='contCard_serv_contItem_itemText'>{props.itemText}</h4>
        </div>
    )
}

export const CardServ = (props) => {
    return (
        <div className='contCard_serv'>
            <h3 className='contCard_serv_title'>{ props.title }</h3>
            <Item_CardServ itemText={ props.itemText1 } itemImg={ props.itemImg1 } />
            <Item_CardServ itemText={ props.itemText2 } itemImg={ props.itemImg2 } />
            <Item_CardServ itemText={ props.itemText3 } itemImg={ props.itemImg3 } />
            <Item_CardServ itemText={ props.itemText4 } itemImg={ props.itemImg4 } />
            <Item_CardServ itemText={ props.itemText5 } itemImg={ props.itemImg5 } />
            <Item_CardServ itemText={ props.itemText6 } itemImg={ props.itemImg6 } />
        </div>
    )
}

// Card Proyect
export const CardProy = (props) => {
    return (
        <div className='contCard_proy'>
            <img className='contCard_proy_image' src={ props.image } alt="" />
            <h3 className='contCard_proy_title'>{ props.title }</h3>
            <p className='contCard_proy_text'>{props.text}</p>
            <button className='btnPrin' type="button">{props.btn}<a href={props.link}></a></button>
        </div>
    )
}