import './App.css'
import { useState, useEffect } from "react"
import Pokemon from './components/Pokemon'

function App() {
  const [pokemones, setPokemones] = useState([])
  const [busquedapokemon, setBusquedaPokemon] = useState ("")

  useEffect(() => {
    const fetchPokemones = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      const { results } = data

      const detallesPokemon = await Promise.all(
        results.map(async (pokemon) => {
          const respuesta = await fetch(pokemon.url)
          const datos = await respuesta.json()

          // Extraemos los tipos y habilidades
          const tipos = datos.types.map(typeInfo => typeInfo.type.name).join(", ");
          const habilidades = datos.abilities.map(ability => ability.ability.name).join(", ");

          return {
            id: datos.id,
            nombre: datos.name,
            imagen: datos.sprites.front_default,
            altura: datos.height,
            peso: datos.weight,
            tipos,
            habilidades
          }
        })
      )
      setPokemones(detallesPokemon)
    }
    fetchPokemones()
  }, [])

    const pokemonesFiltrados = pokemones.filter((p) => {
    return p.nombre.toLowerCase().includes(busquedapokemon)
    })

  return (
    <>
      <h1>Pokedex</h1>

      

      <h2>Welcome to the Pokedex</h2>
      <p>ポケモン図鑑へようこそ</p>
      <h3>Here you can find information about all the pokemons ──★  ̟ !!</h3>
      <p>Find your favorite pokemon!</p>
     
     
     <input
    className='busqueda'
    type='text'
    placeholder='Serch your pokemon:'
    value={busquedapokemon}
    onChange={(e) => setBusquedaPokemon (e.target.value.toLowerCase())}
    />

{
console.log(pokemonesFiltrados)
}

      {pokemonesFiltrados.map(pokemon => (
        <Pokemon key={pokemon.id} pokedatos ={pokemon}/>
      ))}

      <div>
        <p>Developed by Marizkitosh</p>
        <p>2025</p>
        <p>All rights reserved</p>
      </div>
    </>
  )
}

export default App
