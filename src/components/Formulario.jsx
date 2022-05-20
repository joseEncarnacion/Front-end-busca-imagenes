import React, {useState} from 'react'
import Error from './Error'

const Formulario = ({ setBusqueda }) => {
  const [terminoBuscar, setTerminoBuscar] = useState("");
  const [error, setError] = useState(false);

  const buscarimagen = (e) => {
    e.preventDefault();

    // validar
    if (terminoBuscar === "") {
      setError(true);
      return;
    }
    setError(false);

    // enviar termino de busqueda al componente principal
        setBusqueda(terminoBuscar)
  };

  return (
    <form onSubmit={buscarimagen}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            className="form-control form-control-lg"
            type="text"
            name=""
            placeholder="Busca una imagen, ejemplo: IPAD o App"
            onChange={(e) => setTerminoBuscar(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4 ">
          <input
            className="btn btn-lg btn-block  btn-danger"
            type="submit"
            value="Buscar imagen"
          />
        </div>
      </div>
      {error ? (
        <Error mensaje="Agrega al menos un termino de busqueda" />
      ) : null}
    </form>
  );
};
 
export default Formulario;