import React from 'react';

const Pagination = props => {
    return (
        <div className="py-3">
             <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
             <button onClick={props.paginaProxima} type="button" className="btn btn-info">Próximo &rarr;</button>
        {
         window.scrolltop(0, 0)
}
 
        </div>
    )
}

export default Pagination;
