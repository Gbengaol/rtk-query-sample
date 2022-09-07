import React from "react";

interface IProps {
  label: string;
  type: "number" | "text" | "password" | "search" | "email" | "tel";
  name: string;
  form: any;
}
export default function TextInput({ type, name, label, form }: IProps) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        name={name}
        id={name}
        {...form.getFieldProps(name)}
      />
      {form.touched["todo-item"] && form.errors["todo-item"] ? (
        <div className="small text-danger">{form.errors["todo-item"]}</div>
      ) : null}
    </div>
  );
}
