import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import "./Formulario.css";

const inicialForm = {
  nombre: "",
  email: "",
  asunto: "",
  comentario: "",
};

const validacionForm = (form) => {
  let error = {};
  let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComentario = /^.{1,255}$/;

  if (!form.nombre.trim()) {
    error.nombre = "El campo 'Nombre' es requerido.";
  } else if (!regexNombre.test(form.nombre.trim())) {
    error.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    error.email = "El campo 'Email' es requerido.";
  } else if (!regexEmail.test(form.email.trim())) {
    error.email = "El campo 'Email' es incorrecto";
  }

  if (!form.asunto.trim()) {
    error.asunto = "El campo 'Asunto' es requerido.";
  }

  if (!form.comentario.trim()) {
    error.comentario = "El campo 'Comentario' es requerido.";
  } else if (!regexComentario.test(form.comentario.trim())) {
    error.comentario =
      "El campo 'Comentarios' no debe exceder los 255 digitos.";
  }

  return error;
};

const ContactoForm = () => {
  const {
    form,
    error,
    cargando,
    respuesta,
    handleChange,
    handleBlur,
    handleSubmit,
    volver,
    orden,
  } = useForm(inicialForm, validacionForm);

  return (
    <>
      {!volver ? (
        <div className="text-white container p-4">
          <h2 className="text-center colorDos fw-bold">
            Formulario de Contacto
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label
                htmlFor="nombre"
                value="nombre"
                className="cold-2 col-form-label fw-bold"
              >
                NOMBRE Y APELLIDO:
              </label>
              <div className="col-12">
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.nombre}
                  required
                  className="form-control"
                />
                {error.nombre && (
                  <p className="bg-danger cold-10 fw-bold p-2 m-2 text-center text-black">
                    {error.nombre}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <label htmlFor="email" className="cold-2 col-form-label fw-bold">
                EMAIL:
              </label>
              <div className="col-12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Escribe tu email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
                {error.email && (
                  <p className="bg-danger cold-10 fw-bold p-2 m-2 text-center text-black">
                    {error.email}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <label htmlFor="asunto" className="cold-2 col-form-label fw-bold">
                ASUNTO:
              </label>
              <div className="col-12">
                <input
                  id="asunto"
                  type="text"
                  name="asunto"
                  placeholder="Asunto a tratar"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.asunto}
                  required
                  className="form-control"
                />
                {error.asunto && (
                  <p className="bg-danger cold-10 fw-bold p-2 m-2 text-center text-black">
                    {error.asunto}
                  </p>
                )}
              </div>
            </div>
            <div className="text-center p-2">
              <textarea
                className="textarea text-black"
                name="comentario"
                cols="40"
                rows="5"
                placeholder="Envianos tu comentario"
                onBlur={handleBlur}
                onChange={handleChange}
                required
              ></textarea>
              {error.comentario && (
                <p className="bg-danger cold-10 fw-bold text-center text-black">
                  {error.comentario}
                </p>
              )}
            </div>
            <div className="text-center p-2">
              <input
                type="submit"
                value="Enviar"
                className="btn btn-warning fw-bold fs-5"
              />
            </div>
          </form>
          {cargando && (
            <div className="d-flex justify-content-center text-warning">
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          )}
          {respuesta && (
            <div className="mensajeExito">
              Los datos fueron enviados correctamente!
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="text-white text-center p-4">
            <h3>
              Estimado(a) cliente <b>{orden.buyer.nombre.toUpperCase()}</b> su
              orden de compra fue generada correctamente.
            </h3>
            <h2>Número de orden:</h2>
            <p className="fw-bold text-danger fs-4">{orden.id}</p>
            <p className="fw-bold colorDos">
              Total de la compra: ${orden.total}
            </p>
          </div>
          <div className="text-center">
            <p className="text-white fs-3 fw-bold">
              Gracias por confiar en nosotros, nos contactaremos contigo a la
              brevedad.
            </p>
            <p className="text-black fw-bold">
              Email de contacto: {orden.buyer.email}
            </p>
            <Link to="/home" className="btn btn-danger fw-bold">
              Volver al Inicio
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default ContactoForm;
