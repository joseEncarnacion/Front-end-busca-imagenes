import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListarImagen from './components/ListarImagen';

// import 'bootswatch/dist/slate/bootstrap.min.css'

function App() {

  // Estado del componente
  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [paginaInicial, setPaginaInicial] = useState(1)
  const [totalPagina, setTotalPagina] = useState(1)

  useEffect(() => {

    const fetchApi = async()=>{
      if(busqueda === '') return;
  
      const imagenesPorPagina = 30;
      const key = "aqui el key de https://pixabay.com/ al registrarte";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaInicial}`;

      const respuesta = await fetch(url);
      const resultados = await respuesta.json()

      setImagenes(resultados.hits);

      // calcular el total de paginas
      const calcularTotalPage = Math.ceil(
        resultados.totalHits / imagenesPorPagina
      );

      setTotalPagina(calcularTotalPage);

      // mover la pantalla al top
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }
    fetchApi()
   
  }, [busqueda, paginaInicial])


  // definir la pagina anteriro
  const paginaAnterior = ()=>{
    const pageBefore = paginaInicial -1

    if(pageBefore ===0) return;

    setPaginaInicial(pageBefore);

  }


  // Definir pagina siguiente
   const paginaSiguiente = ()=>{
     const nextPage = paginaInicial +1;

     if(nextPage > totalPagina) return;

     setPaginaInicial(nextPage)
   }


   

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>

        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content=center">
        <ListarImagen imagenes={imagenes} />

        {paginaInicial === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            Anterior &laquo;
          </button>
        )}

        {paginaInicial === totalPagina ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
