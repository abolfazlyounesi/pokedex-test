import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { UserActions } from "../state/slices/user.slice";
import Styles from "./styles/PokemonListItem.module.css";

/**
 * splitting the components to smaller components to have reusable components,
 * and defining the interface for components helps the interlicense to work better and reduces
 * the run time errors
 */

interface IPokemonListItemComponent {
  style?: any;
  imageUrl: string;
  name: string;
  id: number;
}

function PokemonListItemComponent(props: IPokemonListItemComponent) {
  const { style, imageUrl, name, id } = props;

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.users.currentUser);
  const userStaredItems = useAppSelector((state) => state.users.entities?.[user]?.stared);

  const IS_STARED = userStaredItems?.includes(name);

  function onPressSave() {
    const userData = userStaredItems ?? [];
    if (IS_STARED) {
      dispatch(
        UserActions.updateOne({
          id: user,
          changes: {
            stared: userData.filter((i) => i !== name)
          }
        })
      );
    } else {
      dispatch(
        UserActions.updateOne({
          id: user,
          changes: {
            stared: [...userData, name]
          }
        })
      );
    }
  }

  return (
    <li className={Styles.listItemContainer} style={style}>
      <img src={imageUrl} loading={"lazy"} className={Styles.image} />
      <div className={Styles.infoContainer}>
        <h6 className={Styles.name}>{name}</h6>
        <h6 className={Styles.id}>#{id}</h6>
      </div>
      <button onClick={onPressSave}>{IS_STARED ? "SAVED!" : "SAVE"}</button>
    </li>
  );
}

export default React.memo(PokemonListItemComponent);
