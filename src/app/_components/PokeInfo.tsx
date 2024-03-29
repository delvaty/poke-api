"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
}

const PokemonInfo: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/ditto"
        );
        setPokemonData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
        else{
            setError(new Error("Ha ocurrido un error"))
        }
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchPokemonData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>{pokemonData?.name || ""}</h2>
      <div>
      <Image
        src={pokemonData?.sprites.front_default || ""}
        alt={pokemonData?.name || ""}
        width={100}
        height={80}
      />
      </div>
      <h3>Abilities:</h3>
      <ul>
        {pokemonData?.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {pokemonData?.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;
