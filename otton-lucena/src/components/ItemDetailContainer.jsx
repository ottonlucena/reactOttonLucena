import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* const getDetail = () => {
      fetch("../../data.json")
        .then((res) => res.json())
        .then((data) => setDetalle(data.find((el) => el.id === Number(id))))
        .then(setLoading(false))
        .catch((error) => console.log("Error:", error));
    };
    setTimeout(() => {
      getDetail();
    }, 2000); */
    const bd = getFirestore();
    const detalleItems = doc(bd, "items", id);

    getDoc(detalleItems)
      .then((snapshot) => {
        setDetalle({ ...snapshot.data(), id: snapshot.id });
      })
      .catch((error) => {
        console.log("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {detalle ? (
        <ItemDetail detalle={detalle} />
      ) : (
        loading && (
          <div className="d-flex justify-content-center text-warning">
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        )
      )}
    </div>
  );
}
