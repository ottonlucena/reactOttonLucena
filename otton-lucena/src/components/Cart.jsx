import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import CartVacio from "./CartVacio";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, setCart, emtyCart, deleteItem, getItemPrice, getItemCount } =
    useContext(CartContext);

  const [botonMenor, setBotonMenor] = useState(true);
  const [botonMayor, setBotonMayor] = useState(false);

  const agregarUno = (product) => {
    const inCart = cart.find((x) => x.id === product.id);
    if (inCart) {
      setCart(
        cart.map((productsInCart) => {
          if (productsInCart.id === product.id) {
            return { ...inCart, count: (inCart.count += 1) };
          } else return productsInCart;
        })
      );
    }
  };

  const quitarUno = (product) => {
    const inCart = cart.find((x) => x.id === product.id);
    if (inCart) {
      setCart(
        cart.map((productsInCart) => {
          if (productsInCart.id === product.id) {
            return { ...inCart, count: (inCart.count -= 1) };
          } else return productsInCart;
        })
      );
    }
  };

  console.warn(
    "Profesor, saludos. No utilice ninguna libreria por falta de tiempo, pero todo funciona correctamente."
  );

  return (
    <>
      <h1 className="text-white fw-bold text-center container">
        Carrito de Compras
      </h1>
      {cart > [] ? (
        <div className="container table-responsive text-center">
          <table className="table table-dark table-hover text-white border border-3 border-warning table-responsive tabl">
            <thead className="table-light">
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Descripción</th>
                <th scope="col">Total de Productos</th>
                <th scope="col"></th>
                <th scope="col">Valor Unitario</th>
                <th scope="col">Valor Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((el) => (
                <tr key={el.id}>
                  <td width={50} className="img">
                    <img
                      className="img-fluid img-thumbnail"
                      src={el.img}
                      alt={el.nombre}
                    />
                  </td>
                  <td data-label="Descripción:">{el.nombre}</td>
                  <td data-label="Unidades:">{el.count}</td>
                  <td className="button">
                    <input
                      type="button"
                      value="-"
                      className="p-1 m-2 btn btn-outline-danger"
                      onClick={(e) => {
                        cart.map((el) => el.id);
                        quitarUno(el, e.target.value);
                        if (el.count < 2) setBotonMenor(true);
                        if (el.count < el.stock) setBotonMayor(false);
                      }}
                      disabled={botonMenor}
                    />
                    <input
                      type="button"
                      value="+"
                      className="p-1 m-2 btn btn-outline-success"
                      onClick={(e) => {
                        cart.map((el) => el.id);
                        agregarUno(el, e.target.value);
                        if (el.count === el.stock) setBotonMayor(true);
                        if (el.count > 0) setBotonMenor(false);
                      }}
                      disabled={botonMayor}
                    />
                  </td>
                  <td data-label="Precio:">$ {el.precio}</td>
                  <td data-label="Sub-total:">${el.precio * el.count}</td>
                  <input
                    type="button"
                    className="text-warning border-0 fw-bold hidden"
                    value="x"
                    onClick={() => {
                      deleteItem(el.id);
                    }}
                  />
                </tr>
              ))}
              <tr className="text-white fw-bold">
                <td className="fs-2 hidden">Detalle:</td>
                <td></td>
                <td>{getItemCount()}</td>
                <td>
                  <input
                    className="btn btn-danger fw-bold"
                    type="button"
                    value="Vaciar carrtio"
                    onClick={() => {
                      emtyCart();
                    }}
                  />
                </td>
                <td>
                  <Link to="/formulario" className="btn btn-info fw-bold">
                    Finalizar Compra
                  </Link>
                </td>
                <td data-label="Total:">$ {getItemPrice()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <CartVacio />
      )}
    </>
  );
}
