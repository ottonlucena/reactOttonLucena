import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDDetailContainer (){
    const [detalle, setDetalle] = useState([])

    useEffect(() => {
        const getDetail = () => {
                fetch("./data.json")
                    .then(res => res.json())
                    .then(data => setDetalle(data.inventario[1]))
                    .catch(error => console.log("Error:", error))
        }
        setTimeout(() => {
            getDetail();
        }, 2000);
    }, [])

    return(
        <div className='container p-3'>
            <h3 className='fw-bold text-warning text-center'>Detalle del Producto</h3>
            <ItemDetail detalle={detalle} />
        </div>
    );
}

