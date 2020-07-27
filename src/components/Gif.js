import React from 'react';
import './Gif.css';
// import salvarGif from './db.js';




const Imagen = (props) => {

    const {images, title} = props.imagen;
    
        return (
            <div className="col-12 col-sm-6 col-lg-3 col-md-4 mb-4">
                <div className="card mb-3">
                   <div className="card-block">
                     <h1 className="card-top">'{title}'</h1>
                     <img src={images.downsized_large.url} alt={title}  className="card-img-top"/>
                      <div className="card-body">
                       <a href={images.original_mp4.mp4} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Veja o Gif</a>
                    {/* <button className="btn btn-primary btn-block" onclick={salvarGif}>Salvar</button> */}
                     </div>
                    </div>
                </div>
            </div>
        )

}

export default Imagen;