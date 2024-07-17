import { createSelector } from "@reduxjs/toolkit";
import { Store } from "../store";

const selfSelect = (state:Store) => state.squares

export const sqauresSelector = createSelector(selfSelect, (squares) => squares.squares)