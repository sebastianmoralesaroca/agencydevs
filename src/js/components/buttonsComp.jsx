export const CreateButton = ({ text }) => {
    return (
        <button>{ text }</button>
    );
};

export const CreateButtonImg = ( srcImg ) => {
    return (
        <button>
            <img src="{ srcImg }" alt=""></img>
        </button>
    )
}
