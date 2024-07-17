import { useDispatch, useSelector } from "react-redux"
import { store, Store } from "../store"

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<Store>()