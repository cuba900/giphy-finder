import React, { Component } from 'react';

class Localizador extends Component {

    procuraRef = React.createRef();

    obterDados = (e) => {
       e.preventDefault();

       // Pegamos o valor do input
       const termino = this.procuraRef.current.value;

       // o enviamos ao componente principal
       this.props.dadosProcura(termino); 
    }

    render() {
        return (
            <form onSubmit={this.obterDados}>
                <div className="row">
                     
                   <div className="form-group col-md-8">
                       <input ref={this.procuraRef} type="text" className="form-control 
                       form-control-lg" placeholder="Procura o Gif.
                       Exemplo: Batman" />
                   </div>
                   <div className="form-group col-md-4">
                       <input type="submit" className="btn btn-lg btn-danger btn-block" value="Procurar..."  />
                   </div>
                </div>
            </form>
        );
    }
}

export default Localizador;