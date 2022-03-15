//? Juan Gallardo 15-03-2022
import React, { useState } from 'react'

const ConditionalApp = () => {
    const [condition, setCondition] = useState(true);
  return (
    <div>
        <button onClick={() => setCondition(!condition)}>
            Toggle
        </button>
        {
            condition
            ? <h1>Show Message in true</h1>
            : <h1>Another Message in false</h1>
        }
        {
            //* Evalua si es distinto de false, null, undefined, un string vacio
            condition && <h1>Show Message only in true</h1>
        }
        <h1>State value is {condition.toString()}</h1>
    </div>
  )
}

export default ConditionalApp