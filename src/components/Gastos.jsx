const Gastos = ({g,eliminarPresupuesto,setEditar }) => {
  const {gasto, nombre, id} = g

  return (
    <div className="arreglo-gastos">
        <p>Nombre de lo gastado: <span>{nombre}</span></p>
        <p>Cifra Gastada <span>{gasto}</span></p>
        <div className="botones-gasto">

          <button
            className="eliminar"
            onClick={e => eliminarPresupuesto(id)}
          >Eliminar</button>

          <button
          onClick={e => setEditar(g)}
          >Editar</button>
        </div>
    </div>
  )
}

export default Gastos
