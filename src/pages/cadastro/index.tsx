import React,{useState} from  'react';
import './style.css';
import Footer from '../../components/footer';
import Header from '../../components/header/index';
import Input from '../../components/input';
import Button from '../../components/button/index';
import '../../assets/styles/global.css';

function Cadastro() {

    return (
        <div className="main">
            {/* o prop description é uma props obrigatoria e o text é condicional que é presente apenas nessa pagina. */}
            <Header description="Cadastre para acessar nossa Coletanea"
             text="Pronto para Cadastrar?"/>

            <h1>Cadastro</h1>

            {/* Com props */}

        <div className="container-cadastro">


            <div className="box-cadastro">

                <div className="box-nome">
                    <Input type="text" name="nome" label="Nome" />
                </div>

                <div className="box-email">
                    <Input type="email" name="email" label="E-mail" />
                </div>

                <div className="box-permissao">
                    <Input list="permissao" type="option" name="permissao" label="Permissão" />
                </div>

                <div>
                    <Input type="password" name="senha" label="Senha" />
                </div>

            </div>

            <Button send="Cadastrar"/>
                
            </div>
        <Footer />
    </div>
    );
}

export default Cadastro;