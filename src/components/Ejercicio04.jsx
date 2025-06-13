import { useState } from "react";

export const Ejercicio04 = () => {
    //Logica
    const user = "Estudiante"
    const [saludo,setSaludo] = useState("UTSH");
    
    const saludadUser = ()=>{
        setSaludo(`Hola ${user}`);
    }
        const despedirUSer = ()=>{
        setSaludo(`Nos veremos despues ${user}`);
    }
    //Visualizacion
  return (
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 4 -- Funciones -- useState -- Saludo
            </h2>
            <hr />
        </div>
        <div className="col-12 text-center">
            <p className="h1">
                {saludo}
            </p>
        </div>
        <div className="col-12 text-center">
            <button className="btn btn-primary w-25 ms-5"onClick={saludadUser}>Saludar</button>
            <button className="btn btn-success w-25 ms-5"onClick={despedirUSer}>Despedir</button>
        </div>
    </div>
  )
}
