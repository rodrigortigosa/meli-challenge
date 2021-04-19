import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import { Categorias } from '../views/Categorias';
import { Productos } from "./Productos";
import productsService from '../../services/products';
import wheel from '../../images/loading-wheel.png';
import '../../styles/Results.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const mostrarResultados = (products, categories) => {
  if (products.length === 0) return <NoMatch />
  else {
    return (
      <div className="results">
        <Categorias categorias={categories} />
        <Productos productos={products} />
      </div>
    )
  }
}

export const Resultados = () => {
  let query = useQuery().get("search");

  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      productsService.getLimitedProducts(query, 4)
      .then((initialProducts) => {
          setProducts(initialProducts);
          setLoading(false);
        })
        .catch((error) => {
        console.log(error);
      });
      productsService.getCategories(query)
      .then((initialCategories) => {
        setCategories(initialCategories);
        })
        .catch((error) => {
        console.log(error);
      });
    }, 2000);
  }, [query]);
  
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
        mostrarResultados(products, categories)
      } 
    </div>
  )
}