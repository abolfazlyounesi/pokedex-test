import React from "react";
import { IPokemonData } from "../dto";
import PokemonListItemComponent from "./pokemon-listItem.component";
import Styles from "./styles/PokemonList.module.css";

interface IPokemonListComponent {
  pokemonData: IPokemonData[];
}

export default function PokemonListComponent(props: IPokemonListComponent) {
  const { pokemonData } = props;
  return (
    <ul className={Styles.list} data-testid={"items-list"}>
      {pokemonData.map((item) => (
        <PokemonListItemComponent
          imageUrl={item.sprites?.front_default}
          name={item.name}
          id={item.id}
          key={item.id.toString()}
        />
      ))}
    </ul>
  );
}
