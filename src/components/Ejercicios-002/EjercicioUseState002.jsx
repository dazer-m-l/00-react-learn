import { TituloEjercicio } from "../utils/TituloEjercicio"
import { useState } from "react"

export const EjercicioUseState002 = () => {

    const [textoBtn, setTextoBtn] = useState('Clik 1');
    const [iconBtn, setIconBtn] = useState('bi-person-fill')

    const cambiarTxtBoton = ()=>{
        setTextoBtn((textoBtn === 'Click 1' ? 'Click 2' : 'Click 1'))
    }
    const cambiarIconBoton = ()=>{
        setIconBtn((iconBtn === 'bi-person-fill' ? 'bi-person-fill-x' : 'bi-person-fill'))        
    }
 return (
     <>
    <TituloEjercicio tituloEjercicio ='Ejercicio 02 - Boton con cambio --  useState' className="text-center"/>
     <div className="col-12 text-center mb-5">
         <button className="btn btn-dark w-50" onClick={()=>{cambiarTxtBoton(),cambiarIconBoton()}}>
             <i className={`bi ${iconBtn}`}></i>
             <span className="ms-2">{textoBtn}</span>
         </button>
     </div>
     </>
 )
}
