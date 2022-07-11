import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Categorias from "./Categorias";
import CartWidget from "./CartWidget";

export default function NavBar2() {
  return (
    <>
      <nav className="navbar navbar-light  divNav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <Logo />
            <b className="titulo">COMERCIAL</b>
            <sup className="tituloDos fw-bold">MIS REINAS</sup>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link className="navbar-brand" to="/home">
                  <Logo />
                  <b className="color">COMERCIAL</b>
                  <sup className="colorDos">MIS REINAS</sup>
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              ></button>
            </div>
            <CartWidget />
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="link text-black" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link text-black" to="/home">
                    Contacto
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/home"
                    className="nav-link dropdown-toggle"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Productos
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <Categorias />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
