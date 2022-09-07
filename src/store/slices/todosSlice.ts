import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
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
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      const newTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[newTodoIndex] = action.payload;
    },
  },
});

export const { addTodos, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
