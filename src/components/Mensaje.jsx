import React from 'react'

const Mensaje = ({children, mensaje}) => {
  return (
    <div>
      <p>{children}</p>
      <p>{mensaje}</p>
    </div>
  )
}

export default Mensaje
