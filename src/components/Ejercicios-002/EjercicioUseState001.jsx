import { useState } from "react"
import { TituloEjercicio } from "../utils/TituloEjercicio"

export const EjercicioUseState001 = () => {
    const [textoBtn, setTextoBtn] = useState('Login');
    const [iconBtn, setIconBtn] = useState('bi-person-fill')

    const cambiarTxtBoton = ()=>{
        setTextoBtn('Cerrar Sesión')
        setIconBtn('bi-person-fill-x')
    }
  return (
    <>
        <TituloEjercicio tituloEjercicio ='Ejercicio 01 - Introducción al hook useState'/>
    <div className="col-12 text-center mb-5">
        <button className="btn btn-dark w-50" onClick={cambiarTxtBoton}>
            <i className={`bi ${iconBtn}`}></i>
            <span className="ms-2">{textoBtn}</span>
        </button>
    </div>
    </>
  )
  
}
