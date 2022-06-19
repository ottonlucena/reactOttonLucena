import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function ItemCount ({inicial, stock, onAdd }){

    const [count, setCount] = useState(inicial)

    const sumar = () =>{
        if (count === inicial) setCount(count + 1) 
        if (count < stock) setCount(count + 1) 
        if (count === "") setCount(1)
    }

    const restar = () =>{
        if ( count === 0) {setCount("")}
        if ( count > inicial) {setCount(count - 1)}
    }

    const reset = () => {
        setCount(inicial)
    }

    const carritoCompras = () => {
        if ( count > inicial) {setCount(Carrito)}
    }

    function Carrito (){
        return <Link to="/cart"><button className='btn btn-warning fw-bold p-2 m-2'>Ver carrito de compra</button></Link>
    }

    return(
    <>
        <div className="text-center text-white">
            <div className="card-body">
                <p className="card-text fs-3">{count}</p>
                <button onClick={sumar} className="btn btn-primary fw-bold">+</button>
                <button onClick={restar} className="btn btn-primary fw-bold m-2">-</button>
                <button onClick={reset} className="btn btn-primary fw-bold">Reset</button>
                <button onClick={() => {onAdd(count); reset();  carritoCompras() }} className="btn btn-primary fw-bold m-1">Agregar al carrito</button>
            </div>
        </div>
    </>
    )
}
    
