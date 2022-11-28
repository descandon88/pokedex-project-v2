import React, { useState, useEffect } from "react";
import Searcher from "./header/Searcher";
import Datos from "./data/datos";
import Cards from "./main/Cards";
import "../components/style.css";
// import PokemonProfile from "./profiles/Pokemonprofile";

function Parent() {
  const [search, setSearch] = useState(false);
  const [inputText, setinputText] = useState("");
  const [apiPokemon, setapiPokemon] = useState([]);
  const [buttonSort, setButtonSort] = useState("#️⃣⬇️");
  // const [MostrarButton, setMostrarButton] = useState(false);
  const [mostrarProfile, setmostrarProfile] = useState(false);
  const [pokemones, setPokemones] = useState(Data);

  useEffect(() => {
    // fetch("http://localhost:3000/pokemons", {
    //   method: "GET",
    //   headers: { "content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setapiPokemon(data);
    //     setPokemones(data);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
      setPokemones(Datos);

  }, []);

  const handleProfile = () => {
    setmostrarProfile(true);
  };

  const handleClear = () => {
    setinputText("");
    setPokemones(apiPokemon);
  };
  const pokemonSearch = (e) => {
    setinputText(e.target.value);
    setSearch(true);
    console.log("se ingresa el texto dentro del pokemonSearch", inputText);

    const pokemonFiltered = apiPokemon.filter((LocalArray) => {
      if (
        LocalArray.nombre.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (e.target.value !== "") {
      if (pokemonFiltered.length === 0) {
        setPokemones(apiPokemon);
        setSearch(false);
        console.log("se imprime todo el objeto " + pokemones);
      } else {
        setPokemones(pokemonFiltered);
        console.log("se imprime datosApi" + pokemones);
      }
    } else {
      setPokemones(apiPokemon);
    }
  };

  const PokemonListSort = () => {
    console.log("Se solicita ordenar las cards");
    if (buttonSort === "#️⃣⬇️") {
      const strAscending = [...pokemones].sort((a, b) =>
        a.nombre > b.nombre ? 1 : -1
      );
      setPokemones(strAscending);

      setButtonSort("🔤⬇️");
    } else {
      const numbAscending = [...pokemones].sort((a, b) =>
        a.id > b.id ? 1 : -1
      );

      setPokemones(numbAscending);

      setButtonSort("#️⃣⬇️");
    }
  };

  return (
    <div>
      <Searcher
        // handleSearchPokemon={handleSearch}
        PokemonInput={inputText}
        SetSearch={setSearch}
        HandleClear={handleClear}
        Search={search}
        SetPokemonInput={setinputText}
        DatosApi={pokemones}
        setPokemonDisplay={setPokemones}
        pokemonSort={PokemonListSort}
        ButtonSort={buttonSort}
        PokemonSearch={pokemonSearch}
        label="🔍"
      />
      <Cards DatosApi={pokemones} />
    </div>
  );
}

export default Parent;
