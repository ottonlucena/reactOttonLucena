import React from "react";
import Item from "./Item";

export default function ItemList({ inventario }) {
  const nombre = inventario.map((e) => e.category);
  const nombreFiltrado = [...new Set(nombre)];

  return (
    <>
      <div className="container-fluid">
        <h2 className="fw-bold colorDos">Productos:</h2>
        <p className="fw-bold text-white fs-3">{nombreFiltrado.join(" - ")}</p>
        <div className="card-group">
          <div className="card-group">
            {inventario.map((inventario) => (
              <Item key={inventario.id} inventario={inventario} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
