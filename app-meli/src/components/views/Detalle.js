import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import productsService from '../../services/products';
import { Loading } from "./Loading";
import '../../styles/Detalle.css';
//import { Categorias } from "./Categorias";

export const Detalle = () => {
  const id = useParams().id;

  const [ product, setProduct ] = useState({});
  const [ descriptionProduct, setDescriptionProduct ] = useState("");
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

    productsService.getDescription(id)
    .then((initialDescription) => {
      setDescriptionProduct(initialDescription);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [id]);

  return (
    <div className="container-main">
      {
        loading ? 
        <Loading />
        :
        <div className="resultados">
          
          {/* <Categorias /> */} 
         
          <div className="details">
            <div className="detail">
              <div className="detail-img">
                <img src={product.picture} alt="Imagen del producto"></img>
              </div>
              <div className="detail-info">
                <div className="detail-status">
                  <span>
                    {product.condition === "new" ? 'Nuevo ' : 'Usado '}
                    {`- ${product.sold_quantity} vendidos`}</span>
                </div>
                <h1>{product.title}</h1>
                <p>$ {product.price}</p>
                <div>
                  <a className="btn btn-primary" role="button" href={product.permalink} target="_blank" rel="noreferrer">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className="detail-descrip-title">
              <h3>Descripción del producto</h3>
            </div>
            <div className="detail-descrip">
              <p className="detail-descrip-text">{descriptionProduct}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
