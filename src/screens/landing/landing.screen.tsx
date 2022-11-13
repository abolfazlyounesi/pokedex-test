import React from "react";
import { SearchBarComponent, PokemonListComponent } from "../../components";
import SelectTypeComponent from "../../components/selectTypeComponent/select-type.component";
import { useLandingScreen } from "./useLandingScreen";

function LandingScreen() {
  const { setSerched, pokemonData } = useLandingScreen();

  return (
    <div className="App">
      <SearchBarComponent onPressSearch={setSerched} />
      <SelectTypeComponent />
      {pokemonData && <PokemonListComponent pokemonData={pokemonData} />}
    </div>
  );
}

export default LandingScreen;
