import React from "react";
import { useState, useEffect } from "react";
import productsService from '../../services/products';
import { useLocation } from "react-router-dom";
import wheel from '../../images/loading-wheel.png'
import '../../styles/Results.css';

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
    <div className="main-container">
      {
        loading ? 
        <div className="div-loading">
            <div className="img-loading">
              <img src={wheel} alt="Loading wheel" width="100px"></img>
            </div>
            <div className="div-loading-text">
              <p>Cargando...</p>
            </div>
        </div> 
        :
        <div className="list-products">
          { 
            <ul>
              {products.map(product => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          }
        </div>
      }
    </div>
  )
}