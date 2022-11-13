import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppState } from "./store";

/**
 * defining the redux's hooks with custom typings to use them instead of directly imported
 * hooks from react-redux. this will help to have cleaner code by reducing imports and having well-
 * typed hooks
 */

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
