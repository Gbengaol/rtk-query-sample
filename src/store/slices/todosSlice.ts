import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: number;
  text: string;
};

export interface TodosState {
  todos: Array<TTodo>;
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TTodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== action.payload),
      ];
    },
  },
});

export const { addTodos, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
