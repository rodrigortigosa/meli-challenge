import React from "react";
import { useState, useEffect } from "react";
import productsService from '../../services/products';
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Resultados = () => {
  let query = useQuery();
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      productsService.getLimitedProducts(query.get("search"), 4)
      .then((initialProducts) => {
          setProducts(prevProducts => prevProducts.concat(initialProducts));
          setLoading(false);
        })
        .catch((error) => {
        console.log(error);
      });
    }, 2000);
    
  }, []);

  

  return (
    <div>
      {loading ? "Cargando..." : ""}
      { 
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      }
    </div>
  )
}