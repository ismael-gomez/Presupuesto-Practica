import NuevoPresupuesto from "./NuevoPresupuesto"
import Presupuesto from "./Presupuesto"
const Header = ({
  presupuesto,
  setPresupuesto,
  isValido,
  setIsValido,
  setModal,
  gastos,
  validarResta,
  eliminarPresupuesto,
  editar,
  setEditar,
  regresaarRestante
}) => {

  return (
    <header>
      <h2>Presupuestos</h2>
      {isValido ? (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto ={ setPresupuesto }
        setIsValido = {setIsValido}
        setModal = {setModal}
        />
      ): (
        <Presupuesto 
          presupuesto={presupuesto}
          gastos = {gastos}
          validarResta = {validarResta}
          eliminarPresupuesto ={eliminarPresupuesto}
          setEditar ={setEditar}
          regresaarRestante = {regresaarRestante}
          editar = {editar}
        />
      )}
    </header>
  )
}

export default Header
