import React from 'react';
import './style.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import logofilme from '../../assets/img/cinema.png';
import logocategoria from '../../assets/img/theater.png';

function Home() {
  return (
    <div className="main">
      <Header description="Conheça nossa coletânea" />
      <h1>Monte sua coletanêa de filmes...</h1>

      <div className="conteudo">
        <h2>Lorem ipsum dolor sit amet conse ctetu</h2>
        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
        sed do eiusmod tempor Lorem ipsum dolor sit amet conse ctetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
        sed do eiusmod tempor Lorem ipsum dolor sit amet conse ctetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>

        <div className="container-filme-categoria">

        <div className="container-filme">
          <img src={logofilme} alt="logo filme"/>
          <h2>Filmes</h2>
          <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet conse ctetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>

        <div className="container-categoria">
          <img src={logocategoria} alt="logo categoria" />
          <h2>Categoria</h2>
          <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet conse ctetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;