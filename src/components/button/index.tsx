import React, { ButtonHTMLAttributes } from 'react';
import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    send:string;
}

const Button:React.FunctionComponent<ButtonProps> = ({send}) =>{
    return(
        <div className="btn">
            <input className="button" type="submit" value={send} />
        </div>
    )
}

export default Button;