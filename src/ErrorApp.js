//? Juan Gallardo 15-03-2022
import React, { useState } from 'react'

const ErrorApp = () => {
    const [error, setError] = useState("");
  return (
    <div>
        <button onClick={() => setError("Error al traer con la API")}>
            Error
        </button>
        <button onClick={() => setError("Credenciales incorrectas")}>
            Another Error
        </button>
        <button onClick={() => setError("")}>
            Proceso Exitoso
        </button>
        {
            error && <h1>{error}</h1>
        }
        </div>
  )
}

export default 
ErrorApp