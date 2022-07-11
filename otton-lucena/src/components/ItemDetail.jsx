import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ detalle }) {
  const onAdd = (count, inicial) => {
    if (count < inicial) {
      alert("Error, debe agregar productos al carrito.");
    }

    isInCart(detalle.id);
    addItem(detalle, count);
  };

  const { isInCart, addItem } = useContext(CartContext);

  const { nombre, img, precio, stock } = detalle;

  return (
    <>
      <div className="container-fluid">
        <h3 className="fw-bold text-white text-center fs-2">
          Detalles del Producto
        </h3>
        <div className="d-flex bg-white">
          <div className="d-block">
            <img
              src={img}
              className="img-fluid shadow p-3 mb-5 bg-body rounded"
              alt={nombre}
            ></img>
          </div>
          <div className="d-block">
            <h5 className="card-title fw-bold fs-2 text-center m-2 colorDos">
              {nombre}
            </h5>
            <p className="text-black text-center p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              necessitatibus! Molestiae fugit esse iusto veniam quas praesentium
              nulla deleniti ea vel, quasi amet neque dolorum nam atque adipisci
              quibusdam cumque Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iure possimus doloremque corporis eaque, eveniet
              minima officiis alias veniam nulla modi praesentium vitae omnis
              esse aliquid obcaecati voluptas nostrum reiciendis iste..
            </p>
            <p className="color fw-bold text-center fs-2">$ {precio}</p>
            <div>
              <p className="colorDos text-center fw-bold">
                Unidades disponibles: {stock}
              </p>
              <ItemCount stock={stock} inicial={0} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
