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
        <h3 className="fw-bold text-warning text-center">
          Detalles del Producto
        </h3>
        <div className="d-flex">
          <div className="d-block">
            <img
              src={img}
              className="img-fluid border border-3 border-warning"
              alt={nombre}
            ></img>
          </div>
          <div className="d-block">
            <h5 className="card-title fw-bold text-white btn-primary fw-bold fs-2 text-center m-2">
              {nombre}
            </h5>
            <p className="text-white text-center p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              necessitatibus! Molestiae fugit esse iusto veniam quas praesentium
              nulla deleniti ea vel, quasi amet neque dolorum nam atque adipisci
              quibusdam cumque Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iure possimus doloremque corporis eaque, eveniet
              minima officiis alias veniam nulla modi praesentium vitae omnis
              esse aliquid obcaecati voluptas nostrum reiciendis iste..
            </p>
            <p className=" text-white fw-bold text-center fs-2">$ {precio}</p>
            <div>
              <p className="text-white text-center fw-bold">
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
