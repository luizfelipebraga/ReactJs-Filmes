import React, { useEffect, useState } from 'react';

import imgRefresh from '../../assets/img/refresh.png';
import imgTrash from '../../assets/img/trash.png';
import logogenero from '../../assets/img/theater.png';


import Button from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Input from '../../components/input';

import './style.css';

function Genero() {

     //prop string genero {get; set;} = "";
  const [idGenero, setIdGenero] = useState(0);
  const [genero, setGenero] = useState('');
 
  const [generos, setGeneros] = useState([]);
  
  //useEffect te permite executar efeitos colaterais em componentes funcionais
  //Buscar dados é um exemplo de efeito colateral
  //usando o useEffect informo ao React que o componente somente depois da renderização
  //é executado depois da renderização do componente, quando ele já estiver montado na DOM
  useEffect(() => {
    listar();
  }, []);
 
  const listar = () => {
    fetch('http://localhost:5000/api/generos', {
      method: 'GET',
      headers: {
        //Bearer authentication é o token authentication, um Schema para autenticação HTTP 
        //O Bearer identifica recursos protegidos por um OAuth2.
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(data => {
        setGeneros(data);
      })
      .catch(err => console.error(err));
  }
 
  const remove = (id:number) => {
    if (window.confirm('Deseja excluir o Genero?')) {
      fetch('http://localhost:5000/api/generos/' + id, {
        method: 'DELETE',
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
      })
        .then(response => response.json())
        .then(data => {
          listar();
        })
        .catch(err => console.error(err));
    }
  }
 
  const refresh = (id:number) => {
    fetch('http://localhost:5000/api/generos/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(data => {
        setIdGenero(data.idGenero);
        setGenero(data.nome);
      })
      .catch(err => console.error(err));
  }
 
  const salvar = () => {
    const form = {
      nome: genero
    };
 
    const method = (idGenero === 0 ? 'POST' : 'PUT');
    const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);
 
    fetch(urlRequest, {
      method: method,
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(() => {
        alert('Genero cadastrado');
        setIdGenero(0);
        setGenero('');
        listar();
      })
      .catch(err => console.error(err));
  }


    return (
        <div className="pagina-genero">
            <Header description="Cadastre os gêneros dos filmes"/>

                <div className="conteudo">

                    <div className="box-title">
                        <h1>Gêneros</h1>
                        <img className="centralizar" src={logogenero} alt="logo de teatro"/>
                    </div>

                    <div className="box-listar-genero">
                        <h3>Lista de Gêneros</h3>
                    </div>

                    <table id="table-generos" className="content-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Gênero</th>
                                <th>Acoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                generos.map((item:any)=>{
                                    return(
                                        <tr className="active-row" key={item.idGenero}>
                                        <td>{item.idGenero}</td>
                                        <td>{item.nome}</td>
                                        <td>
                                            <img className="icon" src={imgRefresh} alt="Logo de refresh" onClick={() => refresh(item.idGenero)} />
                                            <img className="icon" src={imgTrash} alt="Logo de lixo" onClick={() => remove(item.idGenero)}/>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                    <form onSubmit={event=>{
                        event.preventDefault();
                        salvar();
                    }}> 

                    <div className="cadastro">
                    
                        <div className="box-cadastro-genero">
                            <Input type="text" name="nome" label="Cadastrar Gênero" value={genero} placeholder="Gênero" onChange={e=>setGenero(e.target.value)} />
                        </div>

                        <div className="btn">
                            <Button send="Salvar"/>
                        </div>
                    </div>

                    </form>
            </div>
            <Footer />
        </div>
    );
}

export default Genero;