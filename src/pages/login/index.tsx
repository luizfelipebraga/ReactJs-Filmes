import React, {useState} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';

import {useHistory} from 'react-router-dom';

import './style.css';
import '../../assets/styles/global.css';


function Login() {
  
  //O useHistory é a um componente que é usado dentro de uma página para levar o usuário para outra rota do site.
  //Para usá-la, deve-se primeiro instancia-la em uma variável, depois usar a função push e colocar a rota que você quer.
  let history = useHistory();
  
  //UseState é uma forma de definir e atualizar o estado “interno ” de um componente. Por padrao temos que inicializalo como vazio
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')
  
  //criando função de acesso aos dados da API para realização do login
  const login = () =>{
    const login ={
      email: email,
      senha: senha
    }

    //utilizando fetch para acesso à API, determinando o método, body e headers
    fetch('http://localhost:5000/api/Conta/login', {
      method:'POST',
      body: JSON.stringify(login),
      headers: {'content-type' : 'application/json'}
      
      
      })
      //promises
      .then (response=>response.json())
      .then(data=>{

        //condicional para verificar seu o token é válido.
        if(data.token===undefined || data.token ==='' || data.token===null)
        {
          if(data.erro !== undefined)
          {
            alert(data.erro);
          }
          
        }else{
          //A funcionalidade do localStorage consiste em salvar, adicionar, recuperar ou excluir dados localmente em um navegador Web.
          //Esta informação é guardada na forma de pares de chave-valor e os valores podem ser apenas strings.
          //métodos do armazenamento local: setItem(chave, valor)-armazena, getItem(chave)-Recupera, removeItem(chave)-Remove
          localStorage.setItem('token-filmes', data.token)
          //empurrar o usuario para a rota
          history.push('/perfil');
        }
      })
      //para quando der error
      .catch(error=>console.error(error))

    }

  return (
    <div className="main">
      <Header description="Faça o Login para acessar a Coletânea"/>

      <div className="container-title">
        <h1>Login</h1>
      </div>

      {/* Com props */}
      <form onSubmit={event=>{
        event.preventDefault();
        login();}}>

      <div className="container-login">

        <div className="box-email">
          {/* target =(acionar o elemento),  value=(pegar o valor do email e manipular) */}
          <Input type="email" name="email" label="E-mail" onChange={e=>setEmail(e.target.value)}/>
        </div>

        <div>
          {/* target =(acionar o elemento),  value=(pegar o valor da senha e manipular) */}
        <Input type="password" name="senha" label="Senha" onChange={e=>setSenha(e.target.value)}/>
        </div>

      </div>

      <div className="btn">
        <Button send="Enviar"/>  
      </div>
      
  </form>

      
                {/* Jeito tradicional */}

      {/* <div className="container-login">  jeito Normal

          <div className="box-email">
            <label htmlFor="email"><b>E-mail</b></label>
            <input type="email" placeholder="Entre com seu email" name="email" required/>
          </div>

          <div className="box-senha">
            <label htmlFor="senha"><b>Senha</b></label>
            <input type="password" placeholder="Entre com sua senha" name="senha" required/>
          </div>

      </div> */}

          

      <Footer />
    </div>
  );
}

export default Login;