import React from "react";
import { useState, useEffect } from "react";
import productsService from '../../services/products';
import { useLocation } from "react-router-dom";
import wheel from '../../images/loading-wheel.png'
import free_shipping from '../../images/shipping.png'
import '../../styles/Results.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Resultados = () => {
  let query = useQuery();
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
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
      productsService.getCategories(query.get("search"))
      .then((initialCategories) => {
        setCategories(initialCategories);
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
        <div className="results">
          <div className="categories">
            <ul className="list-categories">
              {
                categories.map(category => (
                  <li key={category.id}>{category.name}</li>
                ))
              }
            </ul>
          </div>
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
                            $ {product.price}
                            <img src={free_shipping} alt="Envio gratis" style={{marginLeft: "10px"}}></img>
                          </span>
                          :
                          <span>$ {product.price}</span>
                        }
                      </div>
                      <h2>{product.title}</h2>
                      <p>Completo Unico!</p>
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