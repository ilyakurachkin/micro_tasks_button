import React, {FC} from 'react';

type ButtonType = {
    name: string
    callBack:()=>void

}

export const Button:FC<ButtonType> = (props) => {
    return (
        <>
            <button onClick={props.callBack}>{props.name}</button>
        </>
    );
};

