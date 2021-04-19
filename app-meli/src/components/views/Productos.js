import React from "react";
import free_shipping from '../../images/shipping.png';
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
  )
}