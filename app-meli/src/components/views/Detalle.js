import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import productsService from '../../services/products';
import { Loading } from "./Loading";
import '../../styles/Resultados.css';
import '../../styles/Detalle.css';
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
            <div className="detail-descrip">
              <h3>Descripción del producto</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}