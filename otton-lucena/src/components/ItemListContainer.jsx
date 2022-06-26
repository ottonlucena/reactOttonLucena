import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const { id } = useParams();
  const [inventario, setInventario] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("../../data.json")
        .then((res) => res.json())
        .then((res) => {
          !id
            ? setInventario(res)
            : setInventario(res.filter((item) => item.category === id));
        })
        .catch((error) => console.log("Error:", error));
    }, 2000);
  }, [id]);

  return (
    <>
      <div className="divItem">
        <h1 className="divH1">
          <span className="spaH1">{greeting}</span>
        </h1>
        <ItemList inventario={inventario} />
      </div>
      <ItemDetailContainer />
    </>
  );
}
