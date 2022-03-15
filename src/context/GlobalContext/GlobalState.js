import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"
const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState(1)
  

    useEffect(() => {
           axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=${(pagination - 1) * 20}`)
           .then(response =>
            pokemonData(response.data.results)
            )
            .catch((error) => {
                console.log(error.response.message)
            })
            setLoading(false)
    }, [pagination]);
    const pokemonData = async (data) => {
        const loadingPokemon = await Promise.all(
            data.map(async(pokemon) => {
                const pokemonRecord = await axios.get(pokemon.url)
                .then((response) => response.data
                )
                .catch((error) => {
                    console.log(error)
                })
                const image = `https://professorlotus.com/Sprites/${pokemon.name}.gif`
                return {
                    ...pokemonRecord,
                    image
                }}),
        );
        setPokemons(loadingPokemon);
    }

   
    return (
        <GlobalStateContext.Provider value={{pokemons, pagination, setPagination, setPokemons, setPokedex, pokemonList, setPokemonList, pokemonDetails, setPokemonDetails}}>
            {props.children}
        </GlobalStateContext.Provider> 
    )
}
export default GlobalState