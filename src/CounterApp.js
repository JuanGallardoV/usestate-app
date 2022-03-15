//? Juan Gallardo 15-03-2022
import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    
    const incrementCounter = () => {
        setCounter(counter+1);
        setCounter(prevCounter => prevCounter+1);
        //* Si se quiere hacer mas de una actualizacion del estado en una misma funcion
        //* se puede usar esto, ya que si ejecutamos el setState más de una vez, pues solo aumentará una vez, 
        //* ya que 'tarda un poco' la actualizacion del estado
    }

  return (
    <div>
        <button onClick={incrementCounter}>
            Incrementar
        </button>
        <h1>Clicks: {counter}</h1>
    </div>
  )
}

export default CounterApp