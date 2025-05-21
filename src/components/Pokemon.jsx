import React from 'react'

function Pokemon({pokedatos}){
    return(
        <div className='Card' key={pokedatos.id}>
          <h1>{pokedatos.nombre} #{pokedatos.id}</h1>
          <img src={pokedatos.imagen} alt={pokedatos.nombre} />
          <p>  Altura: {pokedatos.altura / 10} m   </p>
          <p>  Peso: {pokedatos.peso / 10} Kg  </p>
          <p><strong>Tipos:</strong> {pokedatos.tipos}</p>
          <p><strong>Habilidades:</strong> {pokedatos.habilidades}</p>
        </div>

    )
}

export default Pokemon