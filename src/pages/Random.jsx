import React, { useState, useEffect } from "react";

function Random() {

    const [persona, setPersona] = useState([]);
    useEffect(() => {

        const {VITE_RANDOM} = import.meta.env;
        const controller = new AbortController()
        const opciones = {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/Json' },
            signal: controller.signal
        }
        fetch(VITE_RANDOM, opciones)
            .then(response => response.json())
            .then(datos => setPersona(datos.results))
            .catch(err => console.log(err))
            .finally(() => controller.abort())

    }, []);

    return (
        <>
            <h2 className="random__h2">De qué persona estamos hablando?</h2>
            <ul>
                {persona.map((pers, index) => {
                    return (
                        <div className="random__div" key={pers.name}>
                            <img className="random__img" src={pers.picture.large} alt="foto la persona" />
                            <h3 className="random__h3">Nombre : {pers.name.first}</h3>
                            <h3 className="random__h3" >Apellido : {pers.name.last}</h3>
                            <p className="random__p" >Localizacion: {pers.location.street.number}</p>
                            <p className="random__p" >Ciudad: {pers.location.city}</p>
                            <p className="random__p" >Zona: {pers.location.timezone.description}</p>
                            <p className="random__p" >Email: {pers.email}</p>
                            <p className="random__p" >Telefono: {pers.phone}</p>
                        </div>
                    )
                })}
            </ul>
        </>
    )
};
export default Random;