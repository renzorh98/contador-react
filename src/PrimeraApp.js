import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ( { title, subtitle } ) => {
    // const greetings = 'Hola Mundo const';
    const obj = {
        nombre: 'Renzo',
        edad: 24,
        trabajo: {
            nombre: 'AEA',
            puesto: 'AEA SR'
        },
        calidad: [12,12,12]
    };

    // console.log(props.p1)

    return(
        <>
            <h1>{ title }</h1>
            <pre>{ JSON.stringify(obj,null,4) }</pre>
            <p>{ subtitle }</p>
        </>
    )
}

PrimeraApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    title: 'No title',
    subtitle: 'No subtitle'
}

export default PrimeraApp