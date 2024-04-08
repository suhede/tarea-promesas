import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DragonesMaz() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const {VITE_DRAGONES} = import.meta.env;

        const controller = new AbortController();
        const opciones = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json'
        },
            signal: controller.signal
        };

        fetch(VITE_DRAGONES, opciones)
            .then(response => response.json())
            .then(data => setItems(data.results))
            .catch(err => console.log(err))
            .finally(() => controller.abort());
    }, []);

    return (
        <>
            <h2 className="dragon__h2">Dragones & Mazmorras</h2>
            <h3 className="dragon__h3">Elige el monster de preferencia clicando en el nombre</h3>
            <ul className="dragon__ul">
                {items.map((element, index) => (
                    <li key={index}>
                        <Link to={'/item/' + element.name} className="dragon__link"> <span>Monster:</span>  {element.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default DragonesMaz;
