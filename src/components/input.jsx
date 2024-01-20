import React from "react";

export default function Input(props) {
  return (
    <>
      <label htmlFor="email">
        {props.label}
        <br />
        <input
          onChange={props.onChange}
          required
          placeholder={props.placeholder}
          type={props.type}
        />
      </label>
    </>
  );
}
