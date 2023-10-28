import { useState } from "react"


export const Midiv = (props) => {
    return (
        <div>
            <h1>title</h1>
            <h1>title</h1>
            <p>text</p>
            <button type="" onClick={(props.cer)}>close</button>
        </div>
    )
}


export const Prueba = () => {
    const [mostrar, setMostrar] = useState(true)

    const Eliminar=()=>{
        setMostrar(false)
    }

    return (
        <div>
            {mostrar && ( <Midiv cer={Eliminar} /> )}
        </div>
    )
}