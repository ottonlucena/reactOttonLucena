import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ greeting }) {
  const { id } = useParams();
  const [inventario, setInventario] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bd = getFirestore();
    const itemsCollection = collection(bd, "items");

    if (id) {
      const metQuery = query(itemsCollection, where("category", "==", id));
      getDocs(metQuery)
        .then((snapshot) => {
          setInventario(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        })
        .catch((error) => {
          console.log("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          setInventario(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          console.log("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      {!loading ? (
        <div className="divItem">
          <h1 className="text-white display-3 fw-bold">
            Bienvenidos
            <span className="colorDos fw-bold">{greeting}</span>
          </h1>
          <ItemList inventario={inventario} />
        </div>
      ) : (
        <div className="d-flex justify-content-center text-white fw-bold fs-1">
          Cargando Productos
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
    </>
  );
}
