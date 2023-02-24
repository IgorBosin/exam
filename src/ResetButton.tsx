import React from 'react';

type ButtonPoprsType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonPoprsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button disabled={true} onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;

// <button disabled={условие=>boolean}>Add</button> )
