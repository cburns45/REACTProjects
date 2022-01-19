import axios from "axios";
import { useState } from "react";
//import Pokemon from "../Pokemon";

/* function Search(){
    const [search, setSearch] = useState ('');

    const [pokemon, setPokemon] = useState ({});

    const [loading, setLoading] = useState (true);

    const [error, setError] = useState ("");

        function searchPokemon(){
            setLoading(true);

            Axios('https://pokeapi.co/api/v2/pokemon/' + search)

            .then((response) => {
                setPokemon(response.data);
                setLoading(false);
            })

            .catch(()=> {
                setError('Not Found');
            });
        }

        return(
            <div>
                <input type="text" onChange={(event) => {
                    setSearch(event.target.value);
                }} />

                <button onClick={() => searchPokemon()}>Search</button>
                {
                    <p>Searched: {search}</p>
                }

                <div>
                    {
                        (loading === true) ? (
                            <div>
                                <p>{error}</p>

                                <p>Loading...</p>
                            </div>
                        ) : (
                            <div className="border">
                                <Pokemon name = {pokemon.name}
                                id = {pokemon.id}
                                sprites = {pokemon.sprites.front_default} />
                            </div>
                        )
                    }
                </div>
            </div>
            
        );
}

export default Search; */

function Search (){
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState ([]);
    const [pokemonType, setPokemonType] = useState ("");

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    const getPokemon = async () => {
        const toArray = [];

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
        } catch (e) {
            console.log(e);
        }
    };

    console.log(pokemonData);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange}
                    placeholder = "search pokemon"/>
                    <button>submit</button>
                </label>
            </form>

            {pokemonData.map((data) => {
                return (
                    <div className="container">
                        <img src= {data.sprites["front_default"]} />
                        <div className="divTable">
                            <div className="divTableBody">
                                <div className="divTableRow">
                                    <div className="divTableCell">Type</div>
                                    <div className="divTableCell">{pokemonType}</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Height</div>
                                    <div className="divTableCell">
                                        {""}
                                        {Math.round(data.height * 3.9)}
                                    </div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Weight</div>
                                    <div className="divTableCell">
                                        {""}
                                        {Math.round(data.weight / 4.3)}
                                    </div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">Number of Battles</div>
                                    <div className="divTableCell">{data.game_indices.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default Search;