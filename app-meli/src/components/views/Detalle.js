import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import productsService from '../../services/products';
import { Loading } from "./Loading";
import '../../styles/Resultados.css';
//import { Categorias } from "./Categorias";

export const Detalle = () => {
  const id = useParams().id;
  
  const [ product, setProduct ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    productsService.getProduct(id)
    .then((initialProduct) => {
      setProduct(initialProduct);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [id]);

  return (
    <div className="main-container">
      {
        loading ? 
        <Loading />
        :
        <div className="results">
          {/* <Categorias /> */} 
          <h1> {product.title} </h1>
        </div>
      }
    </div>
  )
}