import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import { Categorias } from '../views/Categorias';
import { Productos } from "./Productos";
import { Loading } from "./Loading";
import productsService from '../../services/products';
import '../../styles/Resultados.css';

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
  }, [query]);
  
  return (
    <div className="main-container">
      {
        loading ? 
        <Loading />
        :
        mostrarResultados(products, categories)
      } 
    </div>
  )
}