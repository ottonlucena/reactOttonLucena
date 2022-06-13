import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';


export default function ItemListContainer({ greeting }) {

    const [loading, setLoading] = useState(true)
    const [svg, setSvg] = useState(true)
    const [inventario, setIventario] = useState([])
    

    useEffect(() => {
        setTimeout(() => {
            fetch("./data.json")
                .then(res => res.json())
                .then(res => setIventario(res.inventario))
                .then(setLoading(false))
                .then(setSvg(false))
                .catch(error => console.log("Error:", error))
        }, 2000);
    }, [])

    return (
        <>
            <div className="divItem">
                <h1 className="divH1">Bienvenidos<span className="spaH1">{greeting}</span></h1>
                <ItemList inventario={inventario} />
                <div className='fs-1 fw-bold text-warning'>{loading && "Loading products"}</div>
                <div className='fs-1 fw-bold text-warning'>{svg && <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="text-white bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>}</div>
            </div>
            <ItemDetailContainer/>
        </>
    )
}