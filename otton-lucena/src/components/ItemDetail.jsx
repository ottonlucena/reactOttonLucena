


export default function ItemDetail({ detalle }) {
    const { nombre, img, precio } = detalle

    return (
        <div className="row row-cols-md-2 p-2">
            <div className="col">
                <div className="card text-center">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold text-white btn-primary fw-bold fs-2">{nombre}</h5>
                        <p className="card-text text-warning fs-3 fw-bold">Detalle:</p>
                        <p className="card-text text-white">detalle: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus! Molestiae fugit esse iusto veniam quas praesentium nulla deleniti ea vel, quasi amet neque dolorum nam atque adipisci quibusdam cumque.</p>
                        <p className="card-text text-white fw-bold"> Precio: ${precio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}