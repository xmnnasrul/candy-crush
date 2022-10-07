import { AppDispatch, RootState } from "./";
import {useDispatch, useSelector} from 'react-redux';
import {TypeUseSelectorHook} from "react-redux/es/types"


export const useAppDispatch:()=> AppDispatch = useDispatch;
export const useAppSelector : TypeUseSelectorHook<RootState> = useSelector;
