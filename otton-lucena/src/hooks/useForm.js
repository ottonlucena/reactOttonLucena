import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const useForm = (inicialForm, validacionesForm) => {
  const { cart, getItemPrice, setCart } = useContext(CartContext);

  const bd = getFirestore();
  const ordenColeccion = collection(bd, "orden");

  const [form, setForm] = useState(inicialForm);
  const [error, setError] = useState({});
  const [cargando, setCargando] = useState(false);
  const [respuesta, setRespuesta] = useState(false);
  const [volver, setVolver] = useState(false);
  const [orden, setOrden] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validacionesForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validacionesForm(form));

    const orden = {
      buyer: form,
      compra: cart,
      total: getItemPrice(),
    };
    setOrden(orden);

    if (Object.keys(error).length === 0) {
      setCargando(true);
      addDoc(ordenColeccion, orden)
        .then(({ id }) => {
          setOrden({ ...orden, id });
        })
        .then((res) => {
          setCargando(false);
          setRespuesta(true);
          setForm(inicialForm);
          setTimeout(() => setRespuesta(false), 3000);
          setTimeout(() => setCart([]), 3000);
          setTimeout(() => setVolver(true), 4000);
        });
    }
  };
  return {
    form,
    error,
    cargando,
    respuesta,
    handleChange,
    handleBlur,
    handleSubmit,
    volver,
    orden,
  };
};
