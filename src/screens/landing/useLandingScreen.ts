import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { ALL_POKEMON } from "../../api";
import { IPokemonData } from "../../dto";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { DataActions } from "../../state/slices/data.slice";

/**
 * Moving the functions of the components to a hook outside of the component,
 * helps to have a readable code and easier to understand code.
 * This hook is being used internally in the component
 */

export function useLandingScreen() {
  const [searched, setSerched] = useState("");

  const { data, loading } = useQuery<{ allPokemon: IPokemonData[] }>(ALL_POKEMON);

  const AllPokemon = data?.allPokemon;

  const dispatch = useAppDispatch();

  const pokemonData = useAppSelector((state) => state.data);
  const typeFilter = useAppSelector((state) => state.types.selected, shallowEqual);

  useEffect(() => {
    if (AllPokemon) {
      dispatch(DataActions.setData(AllPokemon));
    }
  }, [data]);

  useEffect(() => {
    if (!typeFilter && !searched && AllPokemon) {
      dispatch(DataActions.setData(AllPokemon));
      return;
    }

    if (!typeFilter && searched && AllPokemon) {
      dispatch(DataActions.setData(AllPokemon.filter((i) => i.name.includes(searched))));
      return;
    }

    if (typeFilter && !searched && AllPokemon) {
      dispatch(
        DataActions.setData(
          AllPokemon.filter((i) => i.types.filter((type) => type.name === typeFilter).length > 0)
        )
      );
      return;
    }

    if (typeFilter && searched && AllPokemon) {
      dispatch(
        DataActions.setData(
          AllPokemon.filter(
            (i) =>
              i.types.filter((type) => type.name === typeFilter).length > 0 &&
              i.name.includes(searched)
          )
        )
      );
      return;
    }
  }, [typeFilter, searched]);

  return {
    pokemonData,
    loading,
    searched,
    setSerched
  };
}
