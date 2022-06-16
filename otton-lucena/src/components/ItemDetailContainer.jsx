import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


export default function ItemDetailContainer (){

    const {id} = useParams()
    const [detalle, setDetalle] = useState()
    console.log(id)

    useEffect(() => {
        const getDetail = () => {
                fetch("../../data.json")
                    .then(res => res.json())
                    .then((data) => setDetalle(data.find(el => el.id === 2)))
                    .catch(error => console.log("Error:", error))
        }
        setTimeout(() => {
            getDetail();
        }, 2000);
    }, [id])
    
    
    return(
        <div className='container p-3'>
            <h3 className='fw-bold text-warning text-center'>Detalle del Producto</h3>
            {(detalle) ? <ItemDetail detalle={detalle} /> : <div>loading</div>}
            console.log(id)
        </div>
    );
}

