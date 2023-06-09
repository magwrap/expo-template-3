import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { fetchUser } from "@/redux/slices/CurrentUser";
export { toggleTheme } from "@/redux/slices/DarkTheme";
