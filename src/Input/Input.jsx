import React from 'react'
import './Inputs.scss'

function Inputs() {
  return (
    <div className="inputs">
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>
    </div>
  )
}

export default Inputs
