import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { useAppDispatch } from "../state/hooks";
import { setCurrentUser } from "../state/slices/user.slice";
import Styles from "./styles/SearchBar.module.css";

interface ISearchBarComponent {
  // seems a bug with the latet version of Eslint :(
  // eslint-disable-next-line
  onPressSearch: (value: string) => void;
}

function SearchBarComponent(props: ISearchBarComponent) {
  const { onPressSearch } = props;

  const [searchedValue, setSearchedValue] = useState("");

  const dispatch = useAppDispatch();

  function onChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchedValue(event.target.value);
  }

  function onClickSearch() {
    if (searchedValue) {
      onPressSearch?.(searchedValue);
    }
  }

  function logout() {
    dispatch(setCurrentUser(""));
  }

  return (
    <div className={Styles.seachbarContainer} data-testid={"searchbar"}>
      <div className={Styles.itemsContainer}>
        <input className={Styles.searchInput} onChange={onChangeText} value={searchedValue} />
        <button className={Styles.searchButton} onClick={onClickSearch}>
          <SearchIcon />
        </button>
      </div>
      <button className={Styles.logoutButton} onClick={logout} data-testid={"logout-button"}>
        Log Out
      </button>
    </div>
  );
}

export default React.memo(SearchBarComponent);
