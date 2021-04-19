import React from 'react';
import "../../styles/Categorias.css";

export const Categorias = ({categorias}) => {
  return (
    <div className="categories">
      <ul className="list-categories">
        {
          categorias.map(category => (
            <li key={category.id}>{category.name}</li>
          ))
        }
      </ul>
    </div>
  )
}