import { useState, useEffect } from "react"
import Header from "./components/Header"
import BtnModal from "./img/mas.svg"
import Modal from "./components/Modal"


const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValido, setIsValido] = useState(true);
  const [modal, setModal] = useState(false);
  const [verModal, setVerModal] = useState(false)
  const [gastos, setGasto] = useState([]);
  const [editar, setEditar] = useState({});

 
  // BASE DE DATOS 
  useEffect(e=>{
    const optenerLS = () =>{
      const pacienteLS =  JSON.parse(localStorage.getItem('gastos')) ?? []
      setGasto(pacienteLS)
    }
    optenerLS();
  },[])


  useEffect(e=>{
    localStorage.setItem('gastos', JSON.stringify(gastos));
  },[gastos])
 
  const handleMas = e => {
    setVerModal(true)
    setEditar({});
  }

  useEffect(() =>{
    if(Object.keys(editar).length > 0){
      setVerModal(true)
      if(!modal){
        console.log('esta en falso xd')
      }
    }
  },[editar])

  
  const validarResta = (gastado) =>{
    console.log(gastado)
  }

  // Gasto elimnar
  const eliminarPresupuesto = id =>{
    const eliminar = gastos.filter(gasto => gasto.id !== id)
    setGasto(eliminar)
  }


  return (
    <div className="uno">
        <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValido = {isValido}
        setIsValido = {setIsValido}
        setModal = {setModal}
        gastos ={gastos}
        validarResta = {validarResta}
        eliminarPresupuesto ={eliminarPresupuesto}
        editar = {editar}
        setEditar = {setEditar}
        // regresaarRestante = {regresaarRestante}
        />
      {modal && 
        <div className="boton-modal">
          <img
            src={BtnModal} 
            alt="mas"
            className="boton-mas"
            onClick={handleMas}
          />
        </div>
      }
      {verModal &&
        <Modal 
          setVerModal={setVerModal}
          gastos ={gastos}
          setGasto={setGasto}
          presupuesto ={presupuesto}
          editar = {editar}
          setEditar = {setEditar}
        />}
    </div>
  )
}

export default App

