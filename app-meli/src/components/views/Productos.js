import React from "react";
import free_shipping from '../../images/shipping.png';
import { generatePath, Link } from "react-router-dom";
import { DETALLE } from '../../config/router/paths';
import "../../styles/Productos.css";

const separarMiles = (num) => {
  return num.toLocaleString('de-DE');
}

export const Productos = ({productos}) => {
  return (
    <div className="list-products">
      {
        productos.map(product => {
          return (
            <Link key={product.id} to={generatePath(DETALLE, { id: product.id })}>
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
            </Link>
          )
        })
      }
    </div>
  )
}