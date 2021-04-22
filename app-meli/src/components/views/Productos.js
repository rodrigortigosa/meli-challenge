import React from "react";
import free_shipping from '../../images/shipping.png';
import "../../styles/Productos.css";
import { DETALLE } from '../../config/router/paths';
const separarMiles = (num) => {
  return num.toLocaleString('de-DE');
}

export const Productos = ({productos}) => {
  return (
    <div className="list-products">
      {
        productos.map(product => {
          return (
            <a key={product.id} href={`${DETALLE}/${product.id}`}>
              <div className="product">
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
                  <div className="product-location">
                    <p>{product.address.state_name}</p>
                  </div>
                  <h2>{product.title}</h2>
                  <p>Completo Unico!</p>
                </div>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}