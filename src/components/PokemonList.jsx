import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "./PokemonCard.jsx";

function PokemonList() {
    const [data, setData] = useState({})
    const [pokemonList, setPokemonList] = useState([]);
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

    async function getPokemonList(url) {
        await axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.error(error))
            .finally(() => setPokemonList(data.results));
    }

    useEffect(() => {
        getPokemonList(pokemonUrl)
    }, []);


    return (
        <div>
            <button className="button" onClick={() => data.previous ? getPokemonList(data.previous) : alert("cant go back further")}>Previous</button>
            <button onClick={() => getPokemonList(data.next)}>Next</button>
            {pokemonList && pokemonList.length > 0 && pokemonList
                .map(pokemon => {
                    return (
                        <>
                            <PokemonCard url={pokemon.url}/>
                        </>
                    )
                })}

        </div>
    );
}

export default PokemonList;