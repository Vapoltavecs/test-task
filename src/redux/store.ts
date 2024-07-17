import { configureStore } from "@reduxjs/toolkit";
import { squaresReducer, squaresSliceName } from "./slices/squaresSlice";

export const store = configureStore({
    reducer: {
        [squaresSliceName] : squaresReducer
    }
})

export type Store = ReturnType<typeof store.getState>