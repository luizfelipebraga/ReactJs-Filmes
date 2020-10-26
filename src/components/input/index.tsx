import React,{InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;
}
// const Input:React.FunctionComponent<InputProps> o : serve para o uso da bibiloteca React.FunctionComponent<InputProps>
// const Input:React.FunctionComponent<InputProps> e um arrow function, ou seja, funcao anonima
// a funcao anonima no react serve para mudar components q esteja presente em todas as pagina
// como por exemplo a pagina login e cadastro que apresenta input em amabas porem com diferences informacoes.
const Input:React.FunctionComponent<InputProps> = ({label, name, ...rest}) =>{
    return(
        <div>
            <label htmlFor={name}>{label}</label><br/>
            <input id={name}{...rest}/>
        </div>
    )
}

export default Input;