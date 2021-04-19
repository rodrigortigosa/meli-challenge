import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Categorias } from '../views/Categorias';
import productsService from '../../services/products';
import wheel from '../../images/loading-wheel.png';
import free_shipping from '../../images/shipping.png';
import '../../styles/Results.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const separarMiles = (num) => {
  return num.toLocaleString('de-DE');
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
        <div className="results">
          <Categorias categorias={categories} />
          <div className="list-products">
            {
              products.map(product => {
                return (
                  <div key={product.id} className="product">
                    <div className="product-img">
                      <img src={product.thumbnail} alt="Imagen del producto" width="180px"></img>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        {
                          product.shipping.free_shipping ? 
                          <span>
                            $ {separarMiles(product.price)}
                            <img className="img-free-shipping" src={free_shipping} alt="Envio gratis"></img>
                          </span>
                          :
                          <span>$ {separarMiles(product.price)}</span>
                        }
                      </div>
                      <h2>{product.title}</h2>
                      <p>Completo Unico!</p>
                    </div>
                    <div className="product-location">
                        <p>{product.address.state_name}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      } 
    </div>
  )
}