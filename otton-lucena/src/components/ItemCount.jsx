import React, { useState } from 'react';


export default function ItemCount ({inicial, stock, onAdd }){
    const [count, setCount] = useState(inicial)

    const sumar = () =>{
        if (count === inicial) setCount(count + 1) 
        if (count < stock) setCount(count + 1) 
        if (count === "") setCount(1)
        if (count === stock) setCount(alert("No contamos con más stock"))
    }

    const restar = () =>{
        if ( count === 0) {setCount("")}
        if ( count > inicial) {setCount(count - 1)}
    }

    const reset = () => {
        setCount(inicial)
    }

    return(
    <>
        <div className="card text-center text-white p-1">
            <div className="card-body">
                <h5 className="card-title">IMAGEN</h5>
                <p className="card-text">Descripción de producto.</p>
                <p className="card-text fs-3">{count}</p>
                <button onClick={sumar} className="btn btn-primary fw-bold">+</button>
                <button onClick={restar} className="btn btn-primary fw-bold m-2">-</button>
                <button onClick={reset} className="btn btn-primary fw-bold">Reset</button>
                <button onClick={() => {onAdd(count); reset()} } className="btn btn-primary fw-bold m-1">onAdd</button>
            </div>
        </div>
    </>
    )
}
    
