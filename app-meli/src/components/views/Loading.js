import React from "react";
import wheel from '../../images/loading-wheel.png';
import "../../styles/Loading.css";

export const Loading = () => {
  return (
    <div className="div-loading">
      <div className="img-loading">
        <img src={wheel} alt="Loading wheel" width="100px"></img>
      </div>
      <div className="div-loading-text">
        <p>Cargando...</p>
      </div>
    </div>
  )
}
