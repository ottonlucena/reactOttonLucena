import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1 className="text-white fw-bold text-center">Carrito de Compras</h1>
      <div className="mb-3 container">
        {cart.map((el) => (
          <div key={el.id} className="styleCard">
            <div className="row g-4">
              <div className="col-md-4">
                <img
                  src={el.img}
                  className="img-fluid rounded-start"
                  alt={el.nombre}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-white">{el.nombre}</h5>
                  <p className="card-text text-white">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">$ {el.precio}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
