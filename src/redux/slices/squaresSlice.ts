import { createSlice } from "@reduxjs/toolkit";
import { ISquare } from "../../components/Square";
import { generateUniqueId } from "../../utils/generateUniqueId";
import { getRandomColor } from "../../utils/getRandomColor";

const initialState: {squares: ISquare[]} = {
    squares: []
}

const squaresSlice = createSlice({
    name: "squares",
    initialState,
    reducers: {
        addSquare(state){
            state.squares = [{id: generateUniqueId(), color: getRandomColor()}, ...state.squares]
        },
        removeSquare(state){
            if(state.squares.length === 0) return state
            state.squares.pop()
            state.squares = [...state.squares]
        }
    }
})

export const { actions:sqauresActions, reducer:squaresReducer, name: squaresSliceName } = squaresSlice