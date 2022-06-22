import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import ItemCount from './ItemCount'

export default function ItemDetail({ detalle }) {

    const onAdd = (count, inicial) =>{
        if ( count < inicial ) {alert("Error, debe agregar productos al carrito.")
    }else{
        alert(`Se agregó ${count} productos al carrito correctamente.`)
    }

    isInCart(detalle.id)
    addItem(detalle, count)
}

    const { isInCart, addItem} = useContext(CartContext)

    const { nombre, img, precio, stock } = detalle


    return (
        <>
        <h3 className='fw-bold text-warning text-center'>Detalle del Producto</h3>
        <div className="row row-cols-md-2 p-4">
            <div className="col">
                <div className="card text-center">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold text-white btn-primary fw-bold fs-2">{nombre}</h5>
                        <p className="card-text text-warning fs-3 fw-bold">Detalle:</p>
                        <p className="card-text text-white">detalle: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus! Molestiae fugit esse iusto veniam quas praesentium nulla deleniti ea vel, quasi amet neque dolorum nam atque adipisci quibusdam cumque.</p>
                        <p className="card-text text-white fw-bold"> Precio: ${precio}</p>
                        <ItemCount stock={stock} inicial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}