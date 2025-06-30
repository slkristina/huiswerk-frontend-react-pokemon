import {useEffect, useState} from "react";
import axios from "axios";
import './PokemonCard.css';

function PokemonCard({url}) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")


    useEffect(() => {
            async function fetchPokemon() {
                try {
                    setLoading(true);
                    const response = await axios.get(url)
                    setPokemon(response.data);
                    setError("");
                } catch (error) {
                    setError("Pokemon fetching error!");
                } finally {
                    setLoading(false);
                }
            }

            fetchPokemon();
        },
        [url]
    );

    if (loading) return <p>Loading {url}</p>
    if (error) return <p> {error} </p>
    if (!pokemon) return <p> No pokemons to show </p>

    return (
        <div className={'pokemon-card'}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p> Weight: {pokemon.weight}</p>
            <p> Moves: {pokemon.moves.length}</p>
            <p>Abilities</p>
            <ul>
                {pokemon.abilities.map(ability => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonCard;