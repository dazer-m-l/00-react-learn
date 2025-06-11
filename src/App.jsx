import { Ejercicio1 } from "./components/Ejercicio1"
import { Actividad1 } from "./components/Actividad1"
import { Actividad2 } from "./components/Actividad2"
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
          <Ejercicio1/>
          <Actividad1/>
          <Actividad2/>
    </div>
    </>
  )
}

export default App
