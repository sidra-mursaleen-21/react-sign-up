import React from "react";

export default function Input(props) {
  return (
    <>
      <label htmlFor="email">
        {props.label}
        <br />
        <input
          id={props.id}
          required={props.required}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type}
        />
      </label>
    </>
  );
}
