import React from "react";

export default function ItemListContainer ({greeting}) {
    return (
        <div className="divItem">
            <h1 className="divH1">Bienvenidos<span className="spaH1">{greeting}</span></h1>
        </div>
    )
}