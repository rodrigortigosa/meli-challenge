import React from "react";
import "../../styles/NoMatch.css";

export const NoMatch = () => {
  return (
    <div className="container-mensaje">
      <div className="mensaje">
        <div>
          <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
          <ul>
            <li><strong>Revisá la ortografía</strong> de la palabra.</li>
            <li>Utilizá <strong>palabras más genéricas</strong> o menos palabras.</li>
            <li>Navegá por las <strong>categorías</strong> para encontrar un producto similar.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}