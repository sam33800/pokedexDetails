import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"


const DetailsPokemon = ()=>{

    const {pokemonID} = useParams()
    const [pokemon, setPokemon] = useState(null)





    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonID)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setPokemon(data)
        })
    
    },[])




    return(

        <section>
            {pokemon &&(
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


                </article>
            )}

        </section>





        
    )
}

export default DetailsPokemon