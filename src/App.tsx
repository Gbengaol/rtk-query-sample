import { useState } from "react";
import { addTodos, deleteTodo } from "./store/slices/todosSlice";
import { selectTodos } from "./store/selectors/todosSelectors";
import { useActions, useTypedSelector } from "./hooks/custom-hooks/redux-hooks";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const todos = useTypedSelector(selectTodos);
  const dispatch = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodoItem = {
      text: todoItem,
      id: Date.now(),
    };
    dispatch(addTodos(newTodoItem));
    setTodoItem("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };
  const deleteTodoItem = (id: number) => {
    return () => dispatch(deleteTodo(id));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-item">Todo Item</label>
        <input
          type="text"
          name="text"
          id="todo-item"
          required
          onChange={onChange}
          value={todoItem}
        />

        <button type="submit">Add todo</button>
      </form>

      <hr />
      <h4>Todo Items</h4>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.text} -{" "}
            <button onClick={deleteTodoItem(todo.id)}>Delete Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
