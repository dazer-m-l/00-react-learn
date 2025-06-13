import { Actividad01 } from'./components/Actividad01'
import { Actividad02 } from'./components/Actividad02'

import { Ejercicio01 } from'./components/Ejercicio01'
import { Ejercicio02 } from'./components/Ejercicio02'
import { Ejercicio03 } from './components/Ejercicio03'
import { Ejercicio04 } from './components/Ejercicio04'

import { EjercicioUseState001 } from './components/Ejercicios-002/EjercicioUseState001'
import { EjercicioUseState002 } from './components/Ejercicios-002/EjercicioUseState002'

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center alert alert-success">Hola UTSH :)</h1>
        </div>
      </div>
      {/**mando a llamar comonentes */}
      <Ejercicio01/>
      <Actividad01/>
      <Actividad02/>
      <Ejercicio02/>
      <Ejercicio03/>
      <Ejercicio04/>
      
      <EjercicioUseState001/>
      <EjercicioUseState002/>
    </div>
    </>
  )
}

export default App
