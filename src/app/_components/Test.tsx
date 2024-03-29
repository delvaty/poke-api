"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: { ability: { name: string }, slot: number }[];
  base_experience: number
  types: { type: { name: string } }[];
}

const Test = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

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
        } else {
          setError(new Error("Ha ocurrido un error"));
        }
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={pokemonData?.sprites.front_default}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {pokemonData?.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @{pokemonData?.name}
              </h5>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
            {pokemonData?.abilities.map((ability, index)=>(
                <p key={index}>{ability.ability.name} </p>
            ))}
          <h3>Types: </h3>
          {pokemonData?.types.map((type, index)=>(
                <span className="pt-2" key={index}>
                    {type.type.name}
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
          ))}
          
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            {pokemonData?.abilities.map((ability, index)=>(
              <p className="font-semibold text-default-400 text-small" key={index}>{ability.slot}</p>
            ))}
            
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">{pokemonData?.base_experience}</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Test;
