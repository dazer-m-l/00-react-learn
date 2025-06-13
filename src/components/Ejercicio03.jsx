import { useState } from "react";

export const Ejercicio03 = () => {
    //Logica
    const [numerito,setNumerito] = useState(0);
    
    const aumentarMasUno = ()=>{
        setNumerito(numerito + 1);
    }
        const disminuirMasUno = ()=>{
        setNumerito(numerito - 1);
    }
    const resetCounter = ()=>{
        setNumerito(0);
    }
    
    //Visualizacion
  return (
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 3 - Funciones -- Contador
            </h2>
            <hr />
        </div>
        <div className="col-12 text-center">
            <p className="h1">
                {numerito}
            </p>
        </div>
        <div className="col-12 text-center">
            <button className="btn btn-danger w-25 ms-5"onClick={disminuirMasUno}>Restar</button>
            <button className="btn btn-warning w-25 ms-5"onClick={resetCounter}>Reiniciar</button>
            <button className="btn btn-success w-25 ms-5"onClick={aumentarMasUno}>Sumar</button>
        </div>
    </div>
  )
}
