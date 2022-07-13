import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Categorias from "./Categorias";
import CartWidget from "./CartWidget";

export default function NavBar2() {
  return (
    <>
      <nav className="navbar navbar-expand-md divNav">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/home">
            <Logo />
            <b className="titulo">COMERCIAL</b>
            <sup className="tituloDos fw-bold">MIS REINAS</sup>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav me-auto fw-bold">
              <li className="nav-item">
                <Link to="/home" className="nav-link active text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/home"
                  className="category-ul nav-link dropdown-toggle text-light"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                >
                  Productos
                </Link>
                <ul className="dropdown-menu bg-secondary">
                  <Categorias />
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link text-light">
                  Contacto
                </Link>
              </li>
            </ul>
            <hr className="text-white-50" />
            <ul className="text-light navbar-nav flex-row flex-wrap">
              <li className="nav-item col-3 col-md-auto p-3">
                <i className="bi bi-whatsapp"></i>
                <small className="d-md-none ms-2">Whatsapp</small>
              </li>
              <li className="nav-item col-3 col-md-auto p-3">
                <i className="bi bi-github"></i>
                <small className="d-md-none ms-2">GitHub</small>
              </li>
              <li className="nav-item col-3 col-md-auto p-3">
                <i className="bi bi-linkedin"></i>
                <small className="d-md-none ms-2">LindkedIn</small>
              </li>
              <li className="nav-item col-3 col-md-auto p-3">
                <i className="bi bi-bootstrap-fill"></i>
                <small className="d-md-none ms-2">Bootstrap</small>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}
