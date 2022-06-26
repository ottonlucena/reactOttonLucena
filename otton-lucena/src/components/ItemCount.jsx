import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemCount({ inicial, stock, onAdd }) {
  const [count, setCount] = useState(inicial);
  const [botonActivo, setBotonActivo] = useState(true);
  const [volverInicio, setVolverInicio] = useState();
  /* const [vaciarCarrito, setVaciarCarrito] = useState(); */

  const { deleteItem, cart } = useContext(CartContext);

  const menu = (e) => {
    if (e.target.textContent === "Agregar al carrito") {
      setBotonActivo(false);
      setCount(count);
    }
  };

  useEffect(() => {
    const volver = () => {
      setVolverInicio(
        <button className="btn btn-info fw-bold p-2 m-2">Volver Inicio</button>
      );
    };

    volver();
  }, []);

  function carrito() {
    return (
      <>
        <div className="text-center">
          <p className="text-warning fs-3 fw-bold">
            Se agregaró {count} unidad/es al carrito.
          </p>
          <Link to="/cart">
            <button className="btn btn-warning fw-bold p-2 m-2">
              Ver carrito de compra
            </button>
          </Link>
          {cart.map((el) => (
            <button
              key={el.id}
              className="btn btn-danger fw-bold p-2 m-2"
              onClick={() => {
                deleteItem(el.id);
                reset();
              }}
            >
              Vaciar carrito
            </button>
          ))}
          <Link to="/home">{volverInicio}</Link>
        </div>
      </>
    );
  }

  const sumar = () => {
    if (count === inicial) setCount(count + 1);
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > inicial) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(inicial);
  };

  return (
    <>
      {botonActivo ? (
        <div className="text-center text-white">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <button
                disabled={!botonActivo}
                onClick={sumar}
                className="btn btn-primary fw-bold m-4"
              >
                +
              </button>
              <div className=" fs-3 m-4">{count}</div>
              <button
                disabled={!botonActivo}
                onClick={restar}
                className="btn btn-primary fw-bold m-4"
              >
                -
              </button>
            </div>
            <button
              disabled={!botonActivo}
              onClick={reset}
              className="btn btn-primary fw-bold"
            >
              Reset
            </button>
            <button
              disabled={!botonActivo}
              onClick={(e) => {
                reset();
                onAdd(count);
                menu(e);
              }}
              className="btn btn-warning fw-bold m-1 "
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ) : (
        carrito()
      )}
    </>
  );
}
