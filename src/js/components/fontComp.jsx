import { Text_portadaHome } from "./textsComp";

export function HeaderLogo () {
    return (
        <div>
            <h3>{ Text_portadaHome.logo }</h3>
        </div>
    )
}

export function CreateParagraph ({ text }) {
    return (
        <p>{ text }</p>
    )
}

export function CreateTitle ({ text }) {
    return (
            <h2>{ text }</h2>
    )
}