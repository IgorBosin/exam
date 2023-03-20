import React from 'react';
import s from './Button.module.css'

type ButtonPoprsType = {
    name: string
    callBack: () => void
    disabledButton: boolean
}

const Button = (props: ButtonPoprsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button
                className={s.button}
                disabled={props.disabledButton}
                onClick={onClickHandler}>
                {props.name}
            </button>
        </div>
    );
};

export default Button;

