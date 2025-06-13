import BtnCrearCuenta from "./utils/BtnCrearCuenta"
import BtnIniciarSesion from "./utils/BtnIniciarSesion"

export const Actividad02 = () => {
  return (
    <div className="row mt-4">
        <div className="col-12 d-flex flex-column flex-row bg-black p-4">
            <BtnCrearCuenta/>
            <BtnIniciarSesion/>
        </div>
    </div>
  )
}
