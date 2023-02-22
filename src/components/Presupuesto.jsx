import { useState, useEffect } from "react";
import Gastos from "./Gastos"
import Mensaje from "./Mensaje";


function Presupuesto({presupuesto, gastos,eliminarPresupuesto,setEditar}) {

  const [actual, setActual] = useState (0);
  const [restante, setRestante ] = useState(0);
  const [color, setColor] =  useState(false);
  const [mensaje, setMensaje] = useState('');
  

  useEffect(e=>{
  const presupuestoRestante = gastos.reduce((total, g) => g.gasto + total, 0)
  const presupuestoActual = presupuesto - presupuestoRestante;
  setActual(presupuestoActual)
  setRestante(presupuestoRestante)
  
  // Mensaje de que el presupuesto se esta gastando

  },[gastos])

  return (
    <section>
          <div className='nuevo-presupuesto'>
            {/* {color && <Mensaje>{mensaje}</Mensaje>} */}
              <h2>Presupuesto</h2>
              <p>Presupuesto : <span>{presupuesto}</span> </p>
              <p>Actual : <span>{actual}</span> </p>
              <p>Restando : <span>{restante}</span> </p>
          </div>
          
          {gastos.length ?(
            <div className="caja-gastos">
                   <h3>Tus Gastos</h3>
              <div className="scroll">
                {gastos.map(g =>
                  <Gastos
                    g={g}
                    key={g.id}
                    eliminarPresupuesto ={eliminarPresupuesto}
                    setEditar={setEditar}
                  />)}
              </div>
            </div>
          ):(
            <div>
              <h3>Agrega Nuevos Gastos</h3>
            </div>
          )
          }
    </section>
  )
}

export default Presupuesto