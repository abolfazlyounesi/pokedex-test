import { gql } from "@apollo/client";

/**
 * Defining the queries of the app in different files helps to have a better structure
 * and easy to find / use pieces of code.
 */

export const ALL_POKEMON = gql`
  {
    allPokemon {
      id
      name
      sprites {
        front_default
      }
      types {
        name
      }
    }
  }
`;

export const ALL_TYPES = gql`
  {
    allTypes {
      name
    }
  }
`;
