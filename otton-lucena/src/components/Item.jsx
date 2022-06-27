import React from "react";
import { Link } from "react-router-dom";

export default function Item({ inventario }) {
  const { nombre, stock, precio, img, id } = inventario;

  return (
    <div className="row row-cols-md-2 p-4 m-1">
      <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{nombre}</h5>
            <p className="card-text text-warning fw-bold">${precio}</p>
            <Link to={`/product/${id}`}>
              <button className="btn btn-primary fw-bold">
                Ver detalle del producto
              </button>
            </Link>
          </div>
          <p className="card-text fw-bold">Unidades disponible: {stock}</p>
        </div>
      </div>
    </div>
  );
}
