import React from 'react'

const Imagen = ({imagenMap}) => {
    
    // destructuring para extraer las variables de la api
        const {largeImageURL, like, previewURL, tags, views} = imagenMap;


    return ( 
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='card'>
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className='card-body' >
                    <p className='card-text'> {like} </p>
                    <p className='card-text'> {views} </p>
                </div>
                <div className='card-footer'>
                    <a 
                        href={largeImageURL}
                        target = "_blank"
                        rel="noreferrer noopener"
                        className='btn btn-primary'
                    >
                        Ver Imagen
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;