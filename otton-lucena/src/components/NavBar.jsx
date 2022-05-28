import React from "react";
import logotipoico from '../logo/logotipoico.ico';

export default function NavBar () {
    return (
        <ul className="ul">
            <img className="logo" src={logotipoico} alt="logo" />
            <li>Home</li>
            <li>Productos</li>
            <li>Contacto</li>
            <li>Dirección</li>
        </ul>
    );
}

