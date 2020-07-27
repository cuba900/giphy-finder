import React, { Component } from 'react';
import Localizador from './components/Localizador';
import Resultado from './components/Resultado';
import Footer from './components/Footer';
import '../src/App.css'


class App extends Component {
 
  state = {
    termino : '',
    imagens : [],
    pagina: ''
  }

  paginaAnterior = () => {
    // leer o state da pagina atual
    let pagina = this.state.pagina;

    //leer se a pagina chega a um, nao voltar
    if(pagina === 1) return null;

    // subtrair mais um na pagina atual
     pagina -= 1;

    // Atualizar o state
    this.setState({
      pagina
    }, () =>  {
      this.consultarApi();
    });

    // console.log(pagina);
  }
  paginaProxima = () => {
    // leer o state da pagina atual
    let pagina = this.state.pagina;

    // Sumar mais um na pagina atual
     pagina += 1;

    // Atualizar o state
    this.setState({
      pagina
    }, () => { 
      this.consultarApi();
    });

    // console.log(pagina);
  }

  consultarApi = () => {
    const pagina = this.state.pagina;
    const offset = 20*(pagina-1);
    const termino = this.state.termino;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=v2Wji1stzUOaMOJGLUdueJE0eX4uX4N4&limit=20&offset=${offset}&q=` + encodeURI(termino);

    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(resultado => this.setState({imagens : resultado.data}))

  }

  dadosProcura = (termino) => {
     this.setState({
       termino : termino,
       pagina: 1
      }, () => {
       this.consultarApi();
      })
          
  }
  render() {
   return (
    
    <div className="app container">
      <div className="jumbotron">
      <h2>Localizador de Gif</h2>
      {/* <p className="lead text-center">Localizador de Gif</p> */}
      
      <Localizador
      dadosProcura={this.dadosProcura}
      />
      </div>
      
      
      <div className="row justify-content-center">
      <Resultado
        imagens={this.state.imagens}
        paginaAnterior={this.paginaAnterior}
        paginaProxima={this.paginaProxima}
      />
      
     </div>
     <Footer />
    </div> 
    
    
  );
}
}



export default App;
