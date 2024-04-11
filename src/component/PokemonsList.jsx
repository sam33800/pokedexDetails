import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PokemonsList = ()=>{

    const [pokemons, setPokemons] = useState()


    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon")
        .then((response)=>{
            return(response.json())
        })
        .then((data)=>{
            setPokemons(data)
        })

    },[])


    return(
        <section>
            <h2>Liste des pokemons</h2>

            {pokemons ? (
                <>
                            {pokemons.map((pokemon)=>{
                return(
                    <article className="article-list" key={pokemon.id}>

                        <Link to = {`/details-pokemon/${pokemon.id}`}><h3>{pokemon.name}</h3></Link>
                        <img className="img-pkmn" src={pokemon.image} alt={pokemon.name} />


                    </article>
                )
            })}

                
                </>

            ) : (
                <article>
                     <img className="spinner" src="/png-transparent-computer-icons-poke-ball-android-game-video-game-rim-removebg-preview.png" alt="" />
                </article>
            )
            
        
            }


        </section>
    )
}

export default PokemonsList