import React from 'react'
import Imagen from './Imagen';

const ListarImagen = ({imagenes}) => {
    return ( 
        <div className='col-12 p-5 row'>
            {
                imagenes.map(imagenMap =>(
                    <Imagen 
                        key={imagenMap.id}
                        imagenMap ={imagenMap}

                    />
                ))
            }
        </div>
     );
}
 
export default ListarImagen;