import { RootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

const selectState = (state: RootState) => state.todos;

export const selectTodos = createSelector([selectState], ({ todos }) => todos);
