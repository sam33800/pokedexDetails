import { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom"





const PokemonsByType = ()=>{



    const [pokemons, setPokemons] = useState([])
    const {type} = useParams()

    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
        .then((response)=>{
            return(response.json())
        })
        .then((data)=>{
            setPokemons(data)
        })
    
    },[]) 
    



    return(
        <section>

        <h2>Les pokemon de type {type}</h2>

            {pokemons.map((pokemon)=>{
                return(
                    <article className="pkmn-details">
                    <h3>{pokemon.name}</h3>
                    <img className="img-pkmn" src={pokemon.image} alt="" />

                    {pokemon.apiTypes.map((type)=>{
                        return(
                            <p>{type.name}</p>
                        )
                    })}

                    <p>HP: {pokemon.stats.HP}</p>
                    <p>attack: {pokemon.stats.attack}</p>
                    <p>defense: {pokemon.stats.defense}</p>
                    <p>special attack: {pokemon.stats.special_attack}</p>
                    <p>special defense: {pokemon.stats.special_defense}</p>
                    <p>speed: {pokemon.stats.speed}</p>


                </article>                )
            })}

        </section>
    )
}

export default PokemonsByType