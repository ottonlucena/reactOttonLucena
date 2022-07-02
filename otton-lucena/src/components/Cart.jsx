import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import CartVacio from "./CartVacio";

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

  return (
    <>
      <h1 className="text-white fw-bold text-center container">
        Carrito de Compras
      </h1>
      {cart > [] ? (
        <div className="container table-responsive">
          <table className="table table-dark table-hover text-white border border-3 border-warning table-responsive">
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
                  <td>
                    <img
                      className="img-fluid"
                      width={50}
                      src={el.img}
                      alt={el.nombre}
                    />
                  </td>
                  <td>{el.nombre}</td>
                  <td>{el.count}</td>
                  <td>
                    {/* <button
                      className="p-1 m-2 btn btn-outline-success"
                      onClick={(e) => {
                        cart.map((el) => el.id);
                        agregarUno(el, e.target.value);
                        if (el.count === el.stock) setBotonMayor(true);
                        if (el.count > 0) setBotonMenor(false);
                      }}
                      disabled={botonMayor}
                    >
                      +
                    </button> */}
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
                    {/* <button
                      className="p-1 m-2 btn btn-outline-danger"
                      onClick={(e) => {
                        cart.map((el) => el.id);
                        quitarUno(el, e.target.value);
                        if (el.count < 2) setBotonMenor(true);
                        if (el.count < el.stock) setBotonMayor(false);
                      }}
                      disabled={botonMenor}
                    >
                      -
                    </button> */}
                    <input
                      type="button"
                      value="+"
                      className="p-1 m-2 btn btn-outline-danger"
                      onClick={(e) => {
                        cart.map((el) => el.id);
                        quitarUno(el, e.target.value);
                        if (el.count < 2) setBotonMenor(true);
                        if (el.count < el.stock) setBotonMayor(false);
                      }}
                      disabled={botonMenor}
                    />
                  </td>
                  <td>$ {el.precio}</td>
                  <td>${el.precio * el.count}</td>
                  {/* <button
                    className="text-warning border-0"
                    onClick={() => {
                      deleteItem(el.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </button> */}
                  <input
                    type="button"
                    className="text-warning border-0 fw-bold"
                    value="x"
                    onClick={() => {
                      deleteItem(el.id);
                    }}
                  />
                </tr>
              ))}
              <tr className="text-white fw-bold">
                <td className="fs-2">Detalle:</td>
                <td></td>
                <td>{getItemCount()}</td>
                <td>
                  <input
                    className="btn btn-danger"
                    type="button"
                    value="Vaciar carrtio"
                    onClick={() => {
                      emtyCart();
                    }}
                  />
                </td>
                <td></td>
                <td>$ {getItemPrice()}</td>
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
