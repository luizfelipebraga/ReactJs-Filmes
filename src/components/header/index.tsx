import React from 'react';

import './style.css';

import logo from '../../assets/img/logo.png';
import { Link, useHistory } from 'react-router-dom';

import jwt from 'jwt-decode';

import '../../assets/styles/global.css';

interface Token{
  "email": string,
  "jti": number,
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string,
  "iss": string,
  "aud": string
}

interface HeaderProps {
  description:string;
  text?:string;
}

const Header:React.FunctionComponent<HeaderProps> = (props) => {

  let history = useHistory();

  const logout = () => {
    localStorage.removeItem('token-filmes');
    history.push('/')
  }

  const menu = () => {

    const token = localStorage.getItem('token-filmes'); 
    var tokenDecode = token === null ? null : jwt<Token>(token)
    

    if(token === undefined || token === null)
    {
      return(

        <ul className="nav_links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/cadastro"><li>Cadastro</li></Link>
        </ul>

      );
    }else{

      if(tokenDecode?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === "Administrador")
      {
        return(
          
          <ul className="nav_links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/filme"><li>Filmes</li></Link>
        <Link to="/genero"><li>Generos</li></Link>
        <Link to ="" onClick={event=>{
          event.preventDefault() 
          logout()}}><li>Logout</li></Link>
      </ul>
      );
    }
      else{
        return(
          
          <ul className="nav_links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/filmesComum"><li>Filmes</li></Link>
          <Link to ="" onClick={event=>{
            event.preventDefault() 
            logout()}}><li>Logout</li></Link>
        </ul>
        );
      }
    }
  }

  

  //fora do return, nao precisa colocar chaves para usar o typescript;
  return (
    <div className="main">
      <div className="header">

        <div className="logo-container">
          <Link to="/"><img className="logo" src={logo} alt="filmes logo"></img></Link>
            <h2>{props.description}</h2>
            
            {/* verifica se existe o props.text e se a propriedade é chamada */}
              {props.text && <h3>{props.text}</h3>}
        </div>

        <nav>
          {menu()}
        </nav>

      </div>
    </div>
  );
}

export default Header;