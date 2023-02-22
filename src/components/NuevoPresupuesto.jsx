import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValido, setModal}) => { 
    const [mensaje, setMensaje] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!presupuesto>0 || presupuesto<0){
            setMensaje(true)
            return;
        }
        setMensaje(false)
        setIsValido(false);
        setModal(true);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="formulario">
            <div>
                <label htmlFor="presuepuesto">Nuevo Presupuesto</label>
                <input
                className="presupuesto"
                type="number"
                id="presuepuesto"
                placeholder="Tu presupuesto"
                value={presupuesto}
                onChange={e => setPresupuesto(Number(e.target.value))}
                />
                <input
                className="Btn-presupuesto"
                type="submit" 
                value="Nuevo Presupuesto" />
                {mensaje && <Mensaje>Valor Invalido 
                    </Mensaje>}
            </div>
        </form>
    </div>
  )
}

export default NuevoPresupuesto
