import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './pages/cadastro/index';
import Filme from './pages/filme';
import Genero from './pages/genero';
import Home from './pages/home';
import Login from './pages/login/index';
import Perfil from './pages/perfil';
import FilmesComum from './pages/filmesComum/filmes';

function Routers(){
    return (
        // o BrowserRouter vai definir a rota
        // o "/" é para definir a rota. o exact serve para definir que o "/" é a página home sem puxar componentes de Login.
        <BrowserRouter>       
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/genero" component={Genero}/>
            <Route path="/filme" component={Filme}/>
            <Route path="/filmesComum" component={FilmesComum}/>
        </BrowserRouter>
    );
}

export default Routers;