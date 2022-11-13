export interface IPokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { name: string }[];
}
