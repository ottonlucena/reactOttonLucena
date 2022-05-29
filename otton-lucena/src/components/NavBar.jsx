import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";


export default function NavBar() {
    return (
        <div className="divNav">
            <nav className="navbar py-3 navbar-expand-lg bg-dark sticky-top " id="navbar">
                <Logo/>
                    <a className="navbar-brand text-warning" href="./"><b>COMERCIAL</b><sup>MIS REINAS</sup></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fill="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-nav-scroll m-auto mb-2 mb-lg-0">
                            <li className="nav-item fw-bold">
                                <a className="nav-link active text-warning" aria-current="page" href="./">Home</a>
                            </li>
                            <li className="nav-item dropdown fw-bold">
                                <a className="nav-link active text-warning" aria-current="page" href="./">Products</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link active text-warning" href="./">Contact</a>
                            </li>
                        </ul>
                    </div>
                <div>
                    <CartWidget nCart={4}/>
                </div>
            </nav>
        </div>
    ); 
}

