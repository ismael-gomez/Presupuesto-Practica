import { useState, useEffect } from "react"
import Mensaje from "./Mensaje";
import CerrarModal from "../img/cerrar.svg"

const Modal = ({setVerModal,gastos,setGasto,editar,setEditar}) => {
  const [nombreGasto, setNombreGasto] = useState('');
  const [cifraGasto, setCifraGasto] = useState(0);
  const [mensaje, setMensaje] = useState(false);

  useEffect(()=>{
    if(Object.keys(editar).length > 0){
      setNombreGasto(editar.nombre);
      setCifraGasto(editar.gasto);
    }
  },[editar])

  let id =  Date.now()
  
  const handleCerrar = ()=>{
    setVerModal(false)
    setEditar({});
  }

  const handleFormulario = e =>{
    e.preventDefault()
    if([nombreGasto, cifraGasto].includes('') || cifraGasto <= 0){
      setMensaje(true)
      return
    }

    const listaGastos = {
      nombre : nombreGasto,
      gasto : cifraGasto,
    }

    setMensaje(false)

    if(editar.id){
      listaGastos.id = editar.id
      const gastoActulizado = gastos.map(gasto => gasto.id === editar.id ? listaGastos : gasto );
      setGasto(gastoActulizado);
      setEditar({});
    }else{
      listaGastos.id=id
      setGasto([...gastos, listaGastos])  
    }
    
    // Reinniciar el formulario 
    setNombreGasto('')
    setCifraGasto(0)
    setVerModal(false)

  }
  return (
    <div className='modal'>
      <div className="boton-cerrar">
        <img
          src={CerrarModal}
          alt="cerrar"
          onClick={handleCerrar}
        />
      </div>
      <form className='modal-form' onSubmit={handleFormulario}>
        <legend>Agrega Nuevo Gasto</legend>
        <div className='nuevo-gasto'>
            <label htmlFor="nuevo-gasto">Nombre Gasto</label>
            <input
              type="text"
              id='nuevo-gasto'
              placeholder='hola'
              value={nombreGasto}
              onChange={e => setNombreGasto(e.target.value)}
            />
        </div>
        <div className='gasto-cifra'>
            <label htmlFor="gasto-cifra">Cifra Gasto</label>
            <input
              type="number" 
              id='gasto-cifra' 
              placeholder='1200'
              value={cifraGasto}
              onChange={e => setCifraGasto(Number(e.target.value))}
            />
        </div>

        <div>
          <input type="submit" value="Nuevo Gasto" />
        </div>
        {mensaje && 
          <Mensaje>Todos los campos son necesarios</Mensaje>
        }
      </form>
    </div>
  )
}

export default Modal
