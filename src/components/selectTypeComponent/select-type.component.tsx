import React from "react";
import Styles from "../styles/SelectTypes.module.css";
import { useSelectType } from "./useSelectType";

/**
 * having this separate component as a module helps to keep things well structured and 
 * easy to use
 * This component has its own hook to handle its functionality separately
 */

export default function SelectTypeComponent() {
  const { typesData, setSelectedType, Selected } = useSelectType();
  return (
    <div className={Styles.container} data-testid={"types"}>
      <div>
        {typesData &&
          typesData?.map((item) => (
            <button
              key={item.name}
              className={
                Selected === item.name ? Styles.SelectedNamesContainer : Styles.namesContainer
              }
              onClick={setSelectedType.bind(null, item.name)}
            >
              <h6 className={Styles.names}>{item.name}</h6>
            </button>
          ))}
        {Selected && <h6 onClick={setSelectedType.bind(null, "")}>Clear Filter</h6>}
      </div>
    </div>
  );
}
