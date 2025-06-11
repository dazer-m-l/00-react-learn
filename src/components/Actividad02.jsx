import BtnCrearCuenta from "./BtnCrearCuenta"
import BtnIniciarSesion from "./BtnIniciarSesion"

export const Actividad02 = () => {
  return (
    <row className="mt-4">
        <div className="col-12 d-flex flex-column flex-row bg-black p-4">
            <BtnCrearCuenta/>
            <BtnIniciarSesion/>
        </div>
    </row>
  )
}
