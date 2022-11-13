import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { ALL_TYPES } from "../../api";
import { ITypes } from "../../dto";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { TypesActions } from "../../state/slices/types.slice";

export function useSelectType() {
  const { data, loading } = useQuery<{ allTypes: ITypes[] }>(ALL_TYPES);

  const dispatch = useAppDispatch();
  const typesData = useAppSelector((state) => state.types);

  const setSelectedType = (name: string) => dispatch(TypesActions.setSelectedType(name));

  useEffect(() => {
    if (data?.allTypes) {
      console.log(data);

      dispatch(TypesActions.setTypes(data.allTypes));
    }
  }, [data]);

  return {
    typesData: typesData.data,
    Selected: typesData.selected,
    loading,
    setSelectedType
  };
}
