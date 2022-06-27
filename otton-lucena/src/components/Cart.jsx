import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartVacio from "./CartVacio";

export default function Cart() {
  const {
    cart,
    emtyCart,
    deleteItem,
    getItemPrice,
    getItemCount /* addItem */,
  } = useContext(CartContext);

  return (
    <>
      <h1 className="text-white fw-bold text-center container">
        Carrito de Compras
      </h1>
      {cart > [] ? (
        <div className="text-center container">
          <table className="table table-dark table-hover text-white border border-3 border-warning">
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
                    <button
                      className="p-1 m-2 btn btn-outline-success"
                      /* onClick={() => {
                        addItem();
                      }} */
                    >
                      +
                    </button>
                    <button className="p-1 m-2 btn btn-outline-danger">
                      -
                    </button>
                  </td>
                  <td>$ {el.precio}</td>
                  <td>${el.precio * el.count}</td>
                  <button
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
                  </button>
                </tr>
              ))}
              <tr className="text-white fw-bold">
                <td className="fs-2">Detalle:</td>
                <td></td>
                <td>{getItemCount()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      emtyCart();
                    }}
                  >
                    Vaciar carrito
                  </button>
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
