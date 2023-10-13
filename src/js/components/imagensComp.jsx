const CreateImage = ( {srcImage, altImage} ) => {
    return (
        <img src="{ruteImg}" alt="{altImage}"></img>
    )
}

export function ImgHome () {
    return (
        <div>
            <CreateImage srcImage='../public/calidad.png' />
        </div>
    )
}