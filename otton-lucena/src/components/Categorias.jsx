import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Categorias() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const bd = getFirestore();

    const collectionCategorias = collection(bd, "categorias");

    getDocs(collectionCategorias).then((snapshot) => {
      setCategoria(snapshot.docs.map((doc) => doc.data().name));
    });
  }, []);

  return (
    <>
      {categoria.map((el) => (
        <li key={el}>
          <Link className="text-white category-li" to={`/category/${el}`}>
            {el}
          </Link>
        </li>
      ))}
    </>
  );
}
