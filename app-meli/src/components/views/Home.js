import React from "react";
import '../../styles/Home.css';
import meliLogo from '../../images/imagen-meli.png'

export const Home = () => {
  return (
    <div>
      <h1 className="titulo-oculto">Mercado Libre Argentina - Donde comprar y vender de todo</h1>
      <div className="div-imagen-meli">
        <img src={meliLogo} alt="Mercado Libre" width="60%"></img>
      </div>
    </div>
  )
}
