export const TituloEjercicio = (props) => {
    const {tituloEjercicio} = props;

  return (
   <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                {tituloEjercicio}
            </h2>
            <hr />
        </div>
    </div>
  )
}
