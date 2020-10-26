import React, { useEffect, useState } from 'react';


import './style.css';

import Button from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Input from '../../components/input';

function Perfil() {

    const [idUsuario, setUsuarioId] = useState(0);

    const[usuario, setUsuario] = useState('');

    const[usuarios, setUsuarios] = useState([]);

     useEffect(() => {
        listarUsuario();
    }, [])

 const listarUsuario = () => {
    fetch('http://localhost:5000/api/Usuarios',{
        method:'GET',
        headers:{
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
       }
   })

   .then(response => response.json())
   .then(data=>{
        setUsuarios(data);
   })

   .catch(erro=>console.error(erro));
    }

    return(
        <div id="perfil-page">
            <Header description="Edite seu Perfil, caso necessário"/>

            <div className="container-perfil">

                <h1>Perfil</h1>

                <div className="box-perfil">

                    <div className="box-nome">
                    <Input type="text" name="nome" label="Nome" />
                    </div>

                    <div className="box-email">
                    <Input type="email" name="email" label="E-mail" />
                    </div>

                    <select name="genero" onChange={e => setUsuario(e.target.value)} value={usuario}>
                        <option value="0">Selecione um Gênero</option>
                        {
                             usuarios.map((item: any) => {
                            return <option value={item.idUsuario}>{item.permissao}</option>
                            })
                        }
                    </select>


                    <Input type="password" name="senha" label="Senha" />


            </div>

            <div className="box-button">
                <Button send="Editar"/>
                <Button send="Salvar"/>
            </div>

        </div>
            <Footer/>
        </div>
    );
}

export default Perfil;