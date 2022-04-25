import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value)


    const sumarUnidad = () => {
        setCounter(counter+1)
    }
    const Reiniciar = () => {
        setCounter(value)
    }
    const disminuirUnidad = () => {
        setCounter(counter-1)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={disminuirUnidad}>-1</button>
            <button onClick={Reiniciar}>Reset</button>
            <button onClick={sumarUnidad}>+1</button>

        </>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp

