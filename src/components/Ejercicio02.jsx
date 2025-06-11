export const Ejercicio02 = () => {
  //Logica de Componente
  /**
   1.- Variables/ constantes
   2.- hooks
   3.- funciones
   */
  const nombreProducto = 'SmartTV 90"';
  function agregarACarritoDeCompras(){
    console.log(`El producto ${nombreProducto} se agrego al carrito`)
  }
  
  function eliminarDelCarritoDeCompras(){
    console.log(`El producto ${nombreProducto} se agrego al carrito`)
  }

  //Visualizacion de Componente
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 2 -Botones y Funciones
            </h2>
            <hr />
        </div>
        <button className ='w-25 btn btn-primary'onClick={agregarACarritoDeCompras}>
          <i className="bi bi-cart"></i>
            <span className="ms-2">Agregar Articulo</span>
        </button>
        <button className ='ms-4 w-25 btn btn-danger'onClick={eliminarDelCarritoDeCompras}>
          <i className="bi bi-trash"></i>
            <span className="ms-2">Eliminar Articulo</span>
        </button>
    </div>
    </>
  );
};
