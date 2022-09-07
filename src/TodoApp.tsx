import { useRef, useState } from "react";
import { selectTodos } from "./store/selectors/todosSelectors";
import { useActions } from "./hooks/redux-hooks/useActions";
import { useTypedSelector } from "./hooks/redux-hooks/useTypedSelector";
import { TTodo } from "./store/slices/todosSlice";
import "./App.css";
import TextInput from "./components/TextInput.component";
import { useFormik } from "formik";
import * as Yup from "yup";

export function TodoApp() {
  const todos = useTypedSelector(selectTodos);
  const { addTodos } = useActions();

  const onSubmit = (values: { "todo-item": string }) => {
    const newTodoItem = {
      text: values["todo-item"],
      id: Date.now(),
    };
    addTodos(newTodoItem);
    resetForm();
  };

  const form = useFormik({
    initialValues: {
      "todo-item": "",
    },
    onSubmit,
    validationSchema: Yup.object({
      "todo-item": Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("This field is required"),
    }),
  });
  const { resetForm, handleSubmit } = form;

  // const toFilter = [
  //   { a: 2, b: 2, c: 3, d: 4 },
  //   { a: 1, b: 2, c: 3, d: 4 },
  //   { a: 1, b: 2, c: 3, d: 4 },
  //   { a: 1, b: 2, c: 3, d: 5 },
  //   { a: 2, b: 2, c: 3, d: 5 },
  // ];

  // const res = toFilter.filter(
  //   (value, index, self) =>
  //     index ===
  //     self.findIndex(
  //       (t) => t.b === value.b && t.c === value.c && t.d === value.d
  //     )
  // );
  // console.log(res);

  return (
    <div className="container pt-3">
      <form onSubmit={handleSubmit}>
        <TextInput label="Todo Item" name="todo-item" type="text" form={form} />

        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </form>

      <hr />
      <h4>Todo Items</h4>
      <div className="w-100">
        {todos?.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

function TodoItem({ todo }: { todo: TTodo }) {
  const [todoItem, setTodoItem] = useState(todo?.text);
  const [editMode, setEditMode] = useState(false);
  const { deleteTodo, updateTodo } = useActions();
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  const startEdit = () => {
    ref?.current?.focus();
    setEditMode(true);
  };

  const deleteTodoItem = (id: number) => {
    return () => deleteTodo(id);
  };

  const editTodo = (id: number) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateTodo({ id, text: todoItem });
      setEditMode(false);
    };
  };
  return (
    <form onSubmit={editTodo(todo.id)} key={todo.id} className="form">
      <div className="w-100">
        <input
          type="text"
          required
          value={todoItem}
          className="form-control"
          onChange={onChange}
          readOnly={!editMode}
          ref={ref}
        />
      </div>
      <div className="ms-3 d-flex align-items-center justify-content-between w-25">
        {editMode ? (
          <button className="btn btn-sm btn-secondary ms-2 w-50" type="submit">
            Update
          </button>
        ) : null}
        {!editMode ? (
          <button
            className="btn btn-sm btn-secondary ms-2 w-50"
            type="button"
            onClick={startEdit}
          >
            Edit
          </button>
        ) : null}

        <button
          onClick={deleteTodoItem(todo.id)}
          className="btn btn-sm btn-danger ms-2 w-50"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}


