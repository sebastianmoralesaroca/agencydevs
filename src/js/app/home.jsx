import { CreateParagraph, CreateTitle, Header } from '../components/textsComp' ;
import { ImgHome } from '../components/imagensComp' ;
import { ButtonsHome, ButtonsRRSS } from '../components/buttonsComp' ;

export function Home () {
    return (
        <>
        <header>
            <Header />
        </header>
        <section>
            <ImgHome />
            <CreateParagraph text="hola" />
            <CreateTitle text="bye" />
            <ButtonsHome />
            <ButtonsRRSS />
        </section>
        </>
    )
}