import React from 'react';

export default function Item({ inventario }) {
    const { nombre, stock, precio, img } = inventario;

    return (
        <div className="row row-cols-md-2 p-2">
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{nombre}</h5>
                        <p className="card-text">stock: {stock}</p>
                        <p className='card-text text-warning fw-bold'>${precio}</p>
                        <button className='btn btn-primary fw-bold'>Ver detalle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

