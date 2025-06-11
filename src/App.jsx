import {Ejercicio01} from'./components/Ejercicio01'
import {Ejercicio02} from'./components/Ejercicio02'

import {Actividad01} from'./components/Actividad01'
import {Actividad02} from'./components/Actividad02'
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
    </div>
    </>
  )
}

export default App
