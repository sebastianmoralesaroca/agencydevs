const CreateButton = ({ buttonText }) => {
    return (
        <button>{ buttonText }</button>
    );
};

const CreateButtonImg = ( srcImg ) => {
    return (
        <button>
            <img src="{ srcImg }" alt=""></img>
        </button>
    )
}

export function ButtonsHome ( ) {
    return (
    <div>
        <CreateButton buttonText="Primer botón" />
        <CreateButton buttonText="Segundo botón" />
    </div>
    );
};

export function ButtonsRRSS () {
    return (
        <div>
            <CreateButtonImg srcImg='#' />
            <CreateButtonImg srcImg='#' />
        </div>
    )
}

