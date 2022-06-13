import React from 'react';
import Item from './Item';

export default function ItemList ({inventario}) {
    return(
        <>
        <h2 className='fw-bold text-warning'>Productos</h2>
        <div className='card-group container row-cols-mx-4'>
            {inventario.map(inventario => <Item key={inventario.id} inventario={inventario} />)}
        </div>
        </>
    )
}