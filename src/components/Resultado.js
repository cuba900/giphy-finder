import React, { Component } from 'react';
import Imagen from './Gif';
import Pagination from './Pagination';

class Resultado extends Component {
    mostrarImagens = () => {
        const imagens = this.props.imagens;
        if(imagens.length === 0) return null;
//        console.log(imagens);

        return (
            <React.Fragment>
              <div className="col-12 p-5 row">
                   {imagens.map(imagen => (
                       <Imagen
                        key={imagen.id}
                        imagen={imagen}
                       />
                   ))}

              </div>
              <Pagination
                  paginaAnterior={this.props.paginaAnterior}
                  paginaProxima={this.props.paginaProxima}
              />
            </React.Fragment>
        )
    }
      
    render() {
        return (
           <React.Fragment>
           {this.mostrarImagens()}
           </React.Fragment>
        );
    }
}

export default Resultado;