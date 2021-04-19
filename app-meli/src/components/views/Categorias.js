import React from 'react';

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