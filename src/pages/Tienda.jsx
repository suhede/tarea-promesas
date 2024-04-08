import React, { useEffect, useState } from "react";

function Tienda() {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {

        const {VITE_TIENDA} = import.meta.env;
        const controller = new AbortController()
        const opciones = {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
        }
        fetch(VITE_TIENDA, opciones)
            .then(response => response.json())
            .then(datos => setUsuario(datos))
            .catch(err => console.log('Error'))
            .finally(() => controller.abort())

    }, []);

    return (
        <>
            <h2 className="tienda__h2">Tienda Online</h2>
            <ul className="tienda__lista">
                {usuario.map((user) =>
                    <div key={user.id} className="tienda__div">
                        <img className="tienda__img" src={user.image} width={200} height={150} alt="imagen producto" />
                        <h3 className="tienda__objeto">Titulo:{user.title} </h3>
                        <h4 className="tienda__precio">Precio:{user.price}</h4>
                        <p className="tienda__desc">Descripcion: {user.description}</p>
                        <h5 className="tienda__categoria">Categoria: {user.category}</h5>
                    </div>)}
            </ul>

        </>
    )
};
export default Tienda;