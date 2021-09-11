import React from "react";
import { useStore } from "../../center-data/context";
import useForm from "../../utils/useForm";

function Form() {
  const [{ user, error }, dipatch] = useStore();
  const { handleSubmit } = useForm();
  const { password, name, email } = user;
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) =>
            dipatch({
              type: "USER",
              payload: { value: e.target.value, field: e.target.name },
            })
          }
        />
        <label>{error.name}</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) =>
            dipatch({
              type: "USER",
              payload: { value: e.target.value, field: e.target.name },
            })
          }
        />
        <label>{error.email}</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) =>
            dipatch({
              type: "USER",
              payload: { value: e.target.value, field: e.target.name },
            })
          }
        />
        <label>{error.password}</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
